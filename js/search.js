function searchAmazon(event) {
    event.preventDefault();
    const searchQuery = document.querySelector("#search").value;
    const sortBy = document.querySelector("#sort").value;
    const primeOnly = document.querySelector("#prime").checked;
    const affiliateTag = "supersconti89-21";
 
    let url = `https://www.amazon.it/s?field-keywords=${searchQuery}&tag=${affiliateTag}`;
 
    if (sortBy === "price_low") {
       url += "&sort=price-asc-rank";
    } else if (sortBy === "rating_high") {
       url += "&sort=review-rank";
    } else if (sortBy === "in_evidenza") {
        url += "&s=relevanceblender";
    }
 
    if (primeOnly) {
       url += "&rh=p_85%3A2470955011";
    }
 
    document.querySelector("#results").innerHTML = `Loading results for ${searchQuery}...`;
 
    fetch(url)
       .then(response => response.text())
       .then(data => {
          const parser = new DOMParser();
          const html = parser.parseFromString(data, "text/html");
          const resultsContainer = html.querySelector("#search");
          const results = resultsContainer.querySelectorAll(".s-result-item");
          let htmlOutput = `<hr><br><h2>Results for ${searchQuery}</h2><br><br>`;
 
          if (results.length === 0) {
             htmlOutput += `<p>No results found.</p>`;
          } else {
             for (let i = 0; i < results.length; i++) {
                const title = results[i].querySelector(".a-link-normal .a-text-normal").textContent;
                const link = results[i].querySelector(".a-link-normal").href;
                const price = results[i].querySelector(".a-offscreen").textContent;
                const imageSrc = results[i].querySelector(".s-image").getAttribute("src").replace("._AC_UL320_SR320,320_", "");
                htmlOutput += `
                <div style="display: flex; align-items: center;">
                   <img src="${imageSrc}" alt="Product Image" style="max-width: 100px; margin-right: 20px;">
                   <div>
                      <h3>${title}</h3>
                      <p>${price}</p>
                      <a href="${link}&tag=${affiliateTag}" target="_blank">View on Amazon</a>
                   </div>
                </div>
                <hr><br>`;
             }
          }
 
          document.querySelector("#results").innerHTML = htmlOutput;
       })
       .catch(error => console.log(error));
}
questi sono i file del mio sito:

index.html:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ricerca prodotti Amazon</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="/offerte-del-giorno" class="active">Offerte del giorno</a></li>
      <li><a href="/offerte-a-tempo">Offerte a tempo</a></li>
      <li><a href="/piu-venduti">Outlet day</a></li>
    </ul>
  </nav>

  <div class="main-container">
    <h1 class="logo">Smart Finder</h1>
    <form id="search-form">
      <label for="search-keyword">Cerca prodotto:</label>
      <input type="text" id="search-keyword" name="search-keyword" required>
      <div class="filter-container">
        <label for="sort-by" id="text">Scegli un filtro:</label>
        <select id="sort-by" name="sort-by">
          <option value="price-asc-rank">Prezzo più basso</option>
          <option value="price-desc-rank">Prezzo più alto</option>
          <option value="review-rank">Valutazione migliore</option>
          <option value="date-desc-rank">Di tendenza</option>
          <option value="relevancerank">Rilevanza</option>
        </select>
        <label for="prime-checkbox" id="prime">Prime:</label>
        <input type="checkbox" id="prime-checkbox" name="prime-checkbox">
      </div>
      <button type="submit">Cerca</button>
      <p>In qualità di Affiliato Amazon ricevo un guadagno dagli acquisti idonei.</p>
    </form>
  </div>
  <script src="js/index.js"></script>
</body>
</html>

index.js:

const AFFILIATE_TAG = 'supersconti89-21'; //Sostituisci con il tuo tag affiliato

const searchForm = document.querySelector('#search-form');

const getSearchResults = async (searchKeyword, searchOptions) => {
  try {
    let searchURL = `https://www.amazon.it/s?k=${searchKeyword}&tag=${AFFILIATE_TAG}`;
    if (searchOptions.sortBy) searchURL += `&s=${searchOptions.sortBy}`;
    if (searchOptions.primeOnly) searchURL += '&rh=p_85%3A20930965031';
    window.location.href = searchURL;
  } catch (error) {
    console.error(error);
  }
};

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchKeyword = encodeURIComponent(document.querySelector('#search-keyword').value.trim());
  const sortBy = encodeURIComponent(document.querySelector('#sort-by').value);
  const primeOnly = document.querySelector('#prime-checkbox').checked;
  getSearchResults(searchKeyword, { sortBy, primeOnly });
});



const offerteDelGiorno = document.querySelector('a[href="/offerte-del-giorno"]');
const offerteATempo = document.querySelector('a[href="/offerte-a-tempo"]');
const piuVenduti = document.querySelector('a[href="/piu-venduti"]');

const redirectToOfferteDelGiorno = (event) => {
  const searchUrl = "https://www.amazon.it";
  try {
    const query = "/gp/goldbox/?ie=UTF8&ref_=topnav_storetab_gb"
    event.preventDefault();
    window.location.href = searchUrl + query + "&tag=" + AFFILIATE_TAG;
  } catch (error) {
    console.error(error);
  }
};

const redirectToOfferteATempo = (event) => {
  const searchUrl = "https://www.amazon.it";
  try {
    const query = "/gp/goldbox/?ie=UTF8&ref_=topnav_storetab_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-collection-lightning-deals%2522%252C%2522dealType%2522%253A%2522LIGHTNING_DEAL%2522%252C%2522sorting%2522%253A%2522FEATURED%2522%257D"
    event.preventDefault();
    window.location.href = searchUrl + query + "&tag=" + AFFILIATE_TAG;
  } catch (error) {
    console.error(error);
  }
};

const redirectToPiuVenduti = (event) => {
  const searchUrl = "https://www.amazon.it";
  try {
    const query = "/gp/goldbox/?ie=UTF8&ref_=topnav_storetab_gb&tag=supersconti89-21&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-overstock%2522%252C%2522sorting%2522%253A%2522FEATURED%2522%257D";
    event.preventDefault();
    window.location.href = searchUrl + query + "&tag=" + AFFILIATE_TAG;
  } catch (error) {
    console.error(error);
  }
};

offerteDelGiorno.addEventListener('click', redirectToOfferteDelGiorno);
offerteATempo.addEventListener('click', redirectToOfferteATempo);
piuVenduti.addEventListener('click', redirectToPiuVenduti);


style.css:

* {
	box-sizing: border-box;
}

html, body {
	font-family: Arial, sans-serif;
	font-size: 16px;
	margin: 0;
	padding: 0;
	background-color: #77bdf6;
	background-image: url('https://i.postimg.cc/zXHW3g2v/blurry-gradient-haikei.png');
	background-size:3000px;
}

.main-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	padding: 20px;
	box-sizing: border-box;
}

.logo {
	color: #F7A934;
	font-size: 50px;
	font-weight: bold;
	margin-bottom: 18px; /* riduzione del margin-bottom */
	text-align: center;
	text-shadow: 2px 2px 3px rgba(0, 0, 0, 5.5);
}

h1 {
	color: rgb(251, 252, 249);
	text-align: center;
	margin-bottom: 30px;
	font-size: 27px;
	text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
	transition: opacity 0.3s ease-in-out
}

form {
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
	max-width: 500px;
	background-color: rgba(23, 20, 60, 0.7);
	padding: 20px;
	box-shadow: 0 0 10px rgba(9, 9, 9, 90);
	/* box-shadow: 0 0 10px rgb(250, 250, 249); */
	border-radius: 10px;
}

label#prime{
	color: #f7a934;
}

label {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 10px;
	color: rgb(251, 250, 250);
}

input[type=text], select {
	padding: 10px;
	font-size: 1.2rem;
	border: none;
	border-radius: 5px;
	width: 100%;
	margin-bottom: 35px;
	margin-top: 10px;
}

input[type=checkbox] {
	margin-left: 15px;
	margin-right: 10px;
	transform: scale(1.5);
	margin-bottom: 20px;
}

button[type=submit] {
	color: rgb(3, 3, 3);
	background-color: rgb(249, 249, 249);
	border: none;
	padding: 10px 20px;
	font-size: 1.2rem;
	border-radius: 5px;
	margin-top: 20px;
	transition: all 0.3s ease-in-out;
}

button[type=submit]:hover {
	background-color: #F7A934;
	color: #fff;
	cursor: pointer;
}

.image-container {
	width: 100%;
	max-width: 200px;
	margin-right: 20px;
	overflow: hidden;
	border-radius: 5px;
}

.image-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.info-container {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.info-container h3 {
	margin: 0;
	font-size: 1.5rem;
	margin-bottom: 5px;
	font-weight: bold;
}

.info-container p {
	margin: 5px 0;
	font-size: 1.2rem;
}

.info-container .rating {
	color: #ffd700;
	font-weight: bold;
}

.info-container a {
	color: #FF9900;
	text-decoration: none;
	font-size: 1.2rem;
	margin-left: 10px;
	transition: color 0.3s ease;
}

.info-container a:hover {
	color: #FFB347;
}

/* Navbar */
nav ul {
  display: flex;
  justify-content: center; /* centro gli elementi orizzontalmente */
  align-items: center; /* centro gli elementi verticalmente */
  list-style: none;
  margin: 0;
  padding: 20px 0;
  background-color: #F7A934;
  border-style: double;
}

nav li {
  margin-right: 30px;
  padding-left: 20px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 3.5);
  text-align: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

nav a:hover {
  color: #77bdf6;
}

/* affiliate description at bottom */
  
p {
	margin: 0 auto;
	padding: 2px;
	color: white;
	font-size: 10px;
	text-align: center;
	max-width: 80%;
	margin-top:35px;
	margin-bottom: -10px;
  }

vorrei aggiungere un tasto che compaia solo dopo che l’utente ha raggiunto la pagina di ricerca e che permetta quindi di ritornare al mio sito

ti chiedo di apportare le seguenti modifiche e scrivermi per intero i file:

1. Aggiungi il seguente codice sotto il tuo script `getSearchResults` in `index.js`:

```javascript
const backButton = document.createElement('button');
backButton.textContent = 'Torna al sito';
backButton.classList.add('back-button');
backButton.style.display = 'none';

backButton.addEventListener('click', () => {
  window.location.href = window.location.origin;
});
```

2. Aggiungi il seguente codice CSS in `style.css`:

```css
.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #f7a934;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #FFB347;
}
```

3. Aggiungi il seguente codice sotto il tuo form in `index.html`:

```html
<button class="back-button">Torna al sito</button>
```

4. Aggiungi il seguente codice al termine del blocco `try` in `getSearchResults`, per far sì che il pulsante appaia solo dopo aver fatto clic sul pulsante di ricerca:

```javascript
backButton.style.display = 'block';
searchForm.appendChild(backButton);
``` 

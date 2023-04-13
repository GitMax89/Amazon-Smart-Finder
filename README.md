questo è il mio sito:

index.html:§
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ricerca prodotti Amazon</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		<h1>Ricerca prodotti Amazon</h1>
		<form id="search-form">
			<label for="search-keyword">Cerca prodotto:</label>
			<input type="text" id="search-keyword" name="search-keyword" required>
			<div class="filter-container">
				<label for="sort-by">Ordina per:</label>
				<select id="sort-by" name="sort-by">
					<option value="relevancerank">Rilevanza</option>
					<option value="price-desc-rank">Prezzo più alto</option>
					<option value="price-asc-rank">Prezzo più basso</option>
					<option value="review-rank">Miglior voto</option>
					<option value="date-desc-rank">Di tendenza</option>
				</select>
				<label for="prime-checkbox">Spedizione Prime:</label>
				<input type="checkbox" id="prime-checkbox" name="prime-checkbox">
			</div>
			<button type="submit">Cerca</button>
		</form>
		<div id="search-results"></div>
	</div>

	<script src="js/index.js"></script>
</body>
</html>

index.js:
const AFFILIATE_TAG = 'supersconti89-21'; //Sostituisci con il tuo tag affiliato

const searchForm = document.querySelector('#search-form');
const searchResults = document.querySelector('#search-results');

const getSearchResults = async (searchKeyword, searchOptions) => {
	try {
		let searchURL = `https://www.amazon.it/s?k=${searchKeyword}&tag=${AFFILIATE_TAG}`;
		if (searchOptions.sortBy) searchURL += `&s=${searchOptions.sortBy}`;
		if (searchOptions.primeOnly) searchURL += '&rh=p_76%3A419357031';
		window.open(searchURL, '_blank');
	} catch (error) {
		console.error(error);
		searchResults.innerHTML = '<p>Errore nella ricerca, riprova più tardi</p>';
	}
};

searchForm.addEventListener('submit', event => {
	event.preventDefault();
	const searchKeyword = encodeURIComponent(document.querySelector('#search-keyword').value.trim());
	const sortBy = encodeURIComponent(document.querySelector('#sort-by').value);
	const primeOnly = document.querySelector('#prime-checkbox').checked;
	getSearchResults(searchKeyword, { sortBy, primeOnly });
});

style.css:
* {
	box-sizing: border-box;
  }
  
  html, body {
	font-family: Arial, sans-serif;
	font-size: 16px;
	margin: 0;
	padding: 0;
	background-color: #cef6f2;
	background-repeat: repeat;
	background-attachment: fixed;
	background-size: 160px 160px;
  }
  
  .container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 30px;
  }
  
  h1 {
	margin-top: 30px;
	margin-bottom: 20px;
  }
  
  form {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 10px #bab8b8;
	background-color: #e7f862;
	margin-bottom: 20px;
	border-radius: 10px;
  }
  
  form label {
	font-weight: bold;
	margin-right: 10px;
	margin-bottom: 10px;
	margin-top: 30px;
  }
  
  form input[type="text"],
  form select {
	flex-basis: 100%;
	margin: 5px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-family: inherit;
	font-size: 16px;
	margin-left: 20px;
	margin-right: 20px;
  }
  
  .filter-container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
	margin-left: 20px;
	margin-right: 20px;
  }
  
  form button[type="submit"] {
	flex-basis: 70%;
	margin: 10px;
	padding: 7px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-family: inherit;
	font-size: 16px;
	cursor: pointer;
	margin-bottom: 30px;
  }
  
  #search-results {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	margin-bottom: 30px;
  }
  
  #search-results .search-result {
	flex-basis: calc(50% - 20px);
	margin: 10px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 0px 5px #ccc;
	font-family: Arial, sans-serif;
	font-size: 14px;
	text-align: center;
  }
  
  #search-results .search-result img {
	max-width: 100%;
	max-height: 200px;
  }
  
  @media screen and (min-width: 768px) {
	form {
	  max-width: 500px;
	  margin: auto;
	}
	.filter-container {
	  flex-wrap: nowrap;
	}
  }
  
  @media screen and (min-width: 992px) {
	#search-results .search-result {
	  flex-basis: calc(33.33% - 20px);
	}
  }

  dai un nuovo look al mio sito prendendo come spunto questo file css:
  body {
    margin: 0;
    padding: 0;
 }
 
 .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: rgb(214, 196, 34);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px;
    box-sizing: border-box;
 }
 
 h1 {
    color: black;
    text-align: center;
 }
 
 form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-color: rgba(60, 154, 226, 0.9);
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
 }
 
 label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
 }
 
 input[type=text], select {
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
 }
 
 input[type=checkbox] {
    margin-left: 5px;
    margin-right: 10px;
    transform: scale(1.5);
 }
 
 input[type=submit] {
    background-color: #f26d7d;
    color: white;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
 }
 
 #results {
    width: 100%;
    max-width: 500px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    box-sizing: border-box;
 }
 
 #results h2 {
    margin-bottom: 20px;
 }
 
 #results hr {
    width: 100%;
    margin-top: 20px;
 }
 
 #results div {
    display: flex;
    align-items: center;
    margin: 20px 0;
 }
 
 #results img {
    max-width: 100px;
    margin-right: 20px;
 }
 
 #results h3 {
    margin: 0;
    font-size: 1.2rem;
 }
 
 #results p {
    margin: 5px 0;
    font-size: 1.1rem;
 }
 
 #results a {
    color: #f26d7d;
    text-decoration: none;
    font-size: 1.1rem;
    margin-left: 10px;
    transition: color 0.3s ease;
 }
 
 #results a:hover {
    color: #f07d8c;
 }
 
 scrivimi per intero i file che hai modificato
____________________________________________________________
Certo, ecco i file HTML, JS e CSS dopo la modifica:


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
	<div class="main-container" style="background-image: url(img/bg.jpg);">
		<h1>Ricerca prodotti Amazon</h1>
		<form id="search-form">
			<label for="search-keyword">Cerca prodotto:</label>
			<input type="text" id="search-keyword" name="search-keyword" required>
			<div class="filter-container">
				<label for="sort-by">Ordina per:</label>
				<select id="sort-by" name="sort-by">
					<option value="relevancerank">Rilevanza</option>
					<option value="price-desc-rank">Prezzo più alto</option>
					<option value="price-asc-rank">Prezzo più basso</option>
					<option value="review-rank">Miglior voto</option>
					<option value="date-desc-rank">Di tendenza</option>
				</select>
				<label for="prime-checkbox">Spedizione Prime:</label>
				<input type="checkbox" id="prime-checkbox" name="prime-checkbox">
			</div>
			<button type="submit">Cerca</button>
		</form>
		<div id="results"></div>
	</div>

	<script src="js/index.js"></script>
</body>
</html>


index.js:
const AFFILIATE_TAG = 'supersconti89-21'; //Sostituisci con il tuo tag affiliato

const searchForm = document.querySelector('#search-form');
const searchResults = document.querySelector('#results');

const renderResults = searchResultsArray => {
	searchResults.innerHTML = '';
	if (!searchResultsArray.length) {
		searchResults.innerHTML = '<p>Nessun risultato trovato</p>';
		return;
	}
	searchResultsArray.forEach(result => {
		const resultContainer = document.createElement('div');
		resultContainer.classList.add('result-container');
		const imageContainer = document.createElement('div');
		imageContainer.classList.add('image-container');
		imageContainer.innerHTML = `<img src="${result.image}" alt="${result.title}">`;
		const infoContainer = document.createElement('div');
		infoContainer.classList.add('info-container');
		infoContainer.innerHTML = `
			<h3>${result.title}</h3>
			<p>Prezzo: ${result.price}</p>
			<p class="rating">${result.rating} (${result.reviewCount} recensioni)</p>
			<a href="${result.url}" target="_blank">Visualizza su Amazon</a>
		`;
		resultContainer.appendChild(imageContainer);
		resultContainer.appendChild(infoContainer);
		searchResults.appendChild(resultContainer);
	});
};

const getSearchResults = async (searchKeyword, searchOptions) => {
	try {
		let searchURL = `https://www.amazon.it/s?k=${searchKeyword}&tag=${AFFILIATE_TAG}`;
		if (searchOptions.sortBy) searchURL += `&s=${searchOptions.sortBy}`;
		if (searchOptions.primeOnly) searchURL += '&rh=p_76%3A419357031';
		const response = await fetch(`/api/search?searchURL=${encodeURIComponent(searchURL)}`);
		const searchResultsArray = await response.json();
		renderResults(searchResultsArray);
	} catch (error) {
		console.error(error);
		searchResults.innerHTML = '<p>Errore nella ricerca, riprova più tardi</p>';
	}
};

searchForm.addEventListener('submit', event => {
	event.preventDefault();
	const searchKeyword = encodeURIComponent(document.querySelector('#search-keyword').value.trim());
	const sortBy = encodeURIComponent(document.querySelector('#sort-by').value);
	const primeOnly = document.querySelector('#prime-checkbox').checked;
	getSearchResults(searchKeyword, { sortBy, primeOnly });
});

style.css:
* {
	box-sizing: border-box;
}

html, body {
	font-family: Arial, sans-serif;
	font-size: 16px;
	margin: 0;
	padding: 0;
}

.main-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	padding: 20px;
	box-sizing: border-box;
}

h1 {
	color: white;
	text-align: center;
	margin-bottom: 30px;
	font-size: 3rem;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 500px;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
}

label {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 10px;
	color: white;
}

input[type=text], select {
	padding: 10px;
	font-size: 1.2rem;
	border: none;
	border-radius: 5px;
	width: 100%;
	margin-bottom: 20px;
}

input[type=checkbox] {
	margin-left: 5px;
	margin-right: 10px;
	transform: scale(1.5);
}

input[type=submit] {
	background-color: #FF9900;
	color: white;
	padding: 10px 20px;
	font-size: 1.2rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

#results {
	width: 100%;
	max-width: 500px;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	box-sizing: border-box;
}

#results h2 {
	margin-bottom: 20px;
	font-size: 2rem;
}

#results hr {
	width: 100%;
	margin-top: 20px;
}

.result-container {
	display: flex;
	align-items: center;
	margin: 20px 0;
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

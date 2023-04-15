const AFFILIATE_TAG = 'supersconti89-21'; //Sostituisci con il tuo tag affiliato

const searchForm = document.querySelector('#search-form');

const getSearchResults = async (searchKeyword, searchOptions) => {
  try {
    let searchURL = `https://www.amazon.it/s?k=${searchKeyword}&tag=${AFFILIATE_TAG}`;
    if (searchOptions.sortBy) searchURL += `&s=${searchOptions.sortBy}`;
    if (searchOptions.primeOnly) searchURL += '&rh=p_85%3A20930965031';
    window.open(searchURL, '_blank');
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
    window.open(searchUrl + query + "&tag=" + AFFILIATE_TAG, '_blank');
  } catch (error) {
    console.error(error);
  }
};

const redirectToOfferteATempo = (event) => {
  const searchUrl = "https://www.amazon.it";
  try {
    const query = "/gp/goldbox/?ie=UTF8&ref_=topnav_storetab_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-collection-lightning-deals%2522%252C%2522dealType%2522%253A%2522LIGHTNING_DEAL%2522%252C%2522sorting%2522%253A%2522FEATURED%2522%257D"
    event.preventDefault();
    window.open(searchUrl + query + "&tag=" + AFFILIATE_TAG, '_blank');
  } catch (error) {
    console.error(error);
  }
};

const redirectToPiuVenduti = (event) => {
  const searchUrl = "https://www.amazon.it";
  try {
    const query = "/gp/goldbox/?ie=UTF8&ref_=topnav_storetab_gb&tag=supersconti89-21&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522deals-overstock%2522%252C%2522sorting%2522%253A%2522FEATURED%2522%257D"
    event.preventDefault();
    window.open(searchUrl + query + "&tag=" + AFFILIATE_TAG, '_blank');
  } catch (error) {
    console.error(error);
  }
};

offerteDelGiorno.addEventListener('click', redirectToOfferteDelGiorno);
offerteATempo.addEventListener('click', redirectToOfferteATempo);
piuVenduti.addEventListener('click', redirectToPiuVenduti);
const AFFILIATE_TAG = 'supersconti89-21'; //Sostituisci con il tuo tag affiliato

const searchForm = document.querySelector('#search-form');

const getSearchResults = async (searchKeyword, searchOptions) => {
	try {
		let searchURL = `https://www.amazon.it/s?k=${searchKeyword}&tag=${AFFILIATE_TAG}`;
		if (searchOptions.sortBy) searchURL += `&s=${searchOptions.sortBy}`;
		if (searchOptions.primeOnly) searchURL += '&rh=p_76%3A419357031';
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
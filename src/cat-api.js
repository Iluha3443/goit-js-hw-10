import Notiflix from 'notiflix';

export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(r => r.json())
        .catch(() => {
      Notiflix.Notify.info(" Oops! Something went wrong! Try reloading the page!");
    })
};

export function fetchCatByBreed(breedId) {
    const API_KEY = 'live_VY16isoMfVwTscFXp0PO3sLHtazvEwsNGlEIbRiYRdilDHkpPGgsoL2LiHXQRVTb';
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            return data;
        }).catch(() => {
      Notiflix.Notify.info(" Oops! Something went wrong! Try reloading the page!");
    });
}

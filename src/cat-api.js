export function fetchBreeds() {
   return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(r => r.json())
        
};

export function fetchCatByBreed(breedId) {
    const API_KEY = 'live_VY16isoMfVwTscFXp0PO3sLHtazvEwsNGlEIbRiYRdilDHkpPGgsoL2LiHXQRVTb';
    const headers = {
        'x-api-key': API_KEY
    };
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    
    return fetch(url, { headers })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            return data;
        });
}

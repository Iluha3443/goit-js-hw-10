export function fetchBreeds() {
   return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(r => r.json())
        
};

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
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

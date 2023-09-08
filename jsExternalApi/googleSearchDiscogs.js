function performSearchDiscogs() {
    const apiKey = 'INSIRA A APIKEY';
    const cseId = 'INSIRA A DISCOGS CSE KEY';
    const query = document.getElementById('search-input-discogs').value;
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cseId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    const resultsDiv = document.getElementById('search-results-discogs');
    resultsDiv.innerHTML = '';

    if (data.items) {
        data.items.forEach(item => {
            const title = item.title;
            const link = item.link;
            const snippet = item.snippet;

            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `
                <h3><a href="${link}">${title}</a></h3>
                <p>${snippet}</p>
            `;

            resultsDiv.appendChild(resultDiv);
        });
    } else {
        resultsDiv.innerHTML = 'No results found.';
    }
}

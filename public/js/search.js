const searchHandler = async (event) => {
    event.preventDefault();
    const section = document.querySelector('#breweries').value.trim();

    if (section) {
        const response = await fetch(`/search/${section}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((x) => x.json())
            .then(data => { posts = data });
    }
};

document.querySelector('#search-button').addEventListener('click', searchHandler);

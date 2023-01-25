const postFormHandler = async (event) => {

    const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json().then(x => {
            for (z = 0; z < x.length; z++) {
                let splitImage = x[z].image.split("dataimage/pngbase64");
                let newImage = 'data:image/png;base64,' + splitImage[1];
                x[z].image =  newImage.slice(0,-1);
            }
        }))
        .then(data => console.log(data))
};

document
    .querySelector('#get-values')
    .addEventListener('click', postFormHandler);
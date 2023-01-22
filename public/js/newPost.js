const newPost = async (event) => {
    event.preventDefault();

    const sport = document.querySelector('#sports').value.trim();
    const stadium = document.querySelector('#stadium').value.trim();
    const section = document.querySelector('#section').value.trim();

    if (sport && stadium && section) {
        let postDetail = {sport: sport, stadium: stadium, section: section};
        const response = await fetch('/newpost/createpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postDetail }),
        });
    }
};


document.querySelector('#post-form').addEventListener('submit', newPost);

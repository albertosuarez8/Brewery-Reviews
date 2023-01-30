const newPost = async () => {
    let postData = {stadium: document.querySelector('#statesSelect').value.trim(),
    section: document.querySelector('#breweries').value.trim()};
    document.location.replace('/dashboard/newpost/createpost?stadium=' + postData.stadium + '&section=' + postData.section);
};


document.querySelector('#post-form').addEventListener('click', newPost);

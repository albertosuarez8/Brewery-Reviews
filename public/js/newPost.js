const newPost = async (event) => {
    let postData = {stadium: document.querySelector('#stadium').value.trim(),
    section: document.querySelector('#section').value.trim()};
    document.location.replace('/newpost/createpost?stadium=' + postData.stadium + '&section=' + postData.section);
};


document.querySelector('#post-form').addEventListener('click', newPost);

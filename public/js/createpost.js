const dropArea = document.querySelector('#drop-area');
const fileInput = document.querySelector('#file-input');

const handleFiles = async (files) => {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.addEventListener('load', function () {
        let preview = document.createElement('img');
        preview.style.height = "250px";
        preview.style.width = "250px";
        preview.src = reader.result;
        if (document.querySelector('#drop-area').hasChildNodes()) {
            document.querySelector('#drop-area').firstChild.remove();
        }
        document.querySelector('#drop-area').appendChild(preview);
    });
}

dropArea.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.stopPropagation();
});
dropArea.addEventListener("drop", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var files = event.dataTransfer.files;
    if (files[0].type.match(/^image\//)) {
        handleFiles(files);
    } else {
        alert(files[0].name + " is not an image file!")
    }
});
fileInput.addEventListener("change", function (event) {
    event.preventDefault();
    if (fileInput.files) {
        handleFiles(fileInput.files);
    }
});
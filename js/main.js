(function uploadFileClickHandle() {
    var uploadFileBtn = document.querySelector("#upload-file-btn");

    var uploadFileInput = document.querySelector("#upload-file-input");

    uploadFileBtn.addEventListener("click", function () {
        uploadFileInput.click();
    });
})();
(function dragAndDropUploadHandle() {
    var dropArea = document.getElementById("drop-area");

    // dropArea.addEventListener("dragenter", handlerFunction);
    // dropArea.addEventListener("dragleave", handlerFunction);
    dropArea.addEventListener("dragover", handlerFunction);
    dropArea.addEventListener("drop", handlerFunction);

    function handlerFunction(e) {
        e.preventDefault(); // khong chay event mac dinh khi keo tha (mo file)
        e.stopPropagation(); // len google doc
        console.log(e, this);

        if (!e.dataTransfer || e.dataTransfer.files.length < 1) return;
        
        // var files = e.dataTransfer.files;

        // files.forEach(function(file) {
            
        // })
    }
})();


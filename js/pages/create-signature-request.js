(function () {
    function initRecipientForm() {
        var originalRecipientBlock = document.querySelector('#original-recipient-block');
        var recipientList = document.querySelector('#recipient-list');
        var addRecipientButton = document.querySelector('#add-recipient-button');
        var addOrderRecipient = document.querySelector('#ordered-checkbox');
        var orderInput = document.querySelector('#order-input');
        // var deleteRecipentButton = document.querySelector('#delete-recipient-button');

        originalRecipientBlock.removeAttribute('id');

        addRecipientButton.addEventListener('click', function () {
            var cloned = originalRecipientBlock.cloneNode(true);
            recipientList.append(cloned);
        });

        addOrderRecipient.addEventListener('click', function () {
            if (addOrderRecipient.checked == true) {
                orderInput.style.display = 'block';
            } else {
                orderInput.style.display = 'none';
            }
        })

        // deleteRecipentButton.addEventListener('click', function() {
        //     recipientList.removeChild(originalRecipientBlock);
        // })
    }

    initRecipientForm();
})()

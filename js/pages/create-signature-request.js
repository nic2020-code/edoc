(function () {
    function initRecipientForm() {
        var originalRecipientBlock = document.querySelector("#original-recipient-block");
        var recipientList = document.querySelector("#recipient-list");
        var addRecipientButton = document.querySelector("#add-recipient-button");
        var addOrderRecipient = document.querySelector("#ordered-checkbox");
        var orderInput = document.querySelector("#order-input");

        originalRecipientBlock.removeAttribute("id");

        addRecipientButton.addEventListener("click", function () {
            var count = recipientList.getElementsByClassName('recipient').length;
            var cloned = originalRecipientBlock.cloneNode(true);
            var elemOrder = cloned.querySelector('.order-text.w-hidden');
            var elemEmail = cloned.querySelector('.text-field-2.w-input');
            var elemName = cloned.querySelector('.text-field-3.w-input');
            var elemSelection = cloned.querySelector('.dropdown-text');

            elemOrder.setAttribute("id", "order-input" + count);
            elemEmail.setAttribute("id", "email" + count);
            elemName.setAttribute("id", "name" + count);
            elemSelection.setAttribute("id", "role-sign" + count);

            recipientList.append(cloned);
        });

        addOrderRecipient.addEventListener("click", function (event) {
            event.stopPropagation();

            if (addOrderRecipient.checked == true) {
                orderInput.style.display = "block";
            } else {
                orderInput.style.display = "none";
            }
        });

        recipientList.addEventListener("click", function (event) {
            event.stopPropagation();

            if (!event.target.classList.contains("delete-recipient-button"))
                return;

            event.target.closest(".recipient").remove();
        });
    }

    initRecipientForm();
})();

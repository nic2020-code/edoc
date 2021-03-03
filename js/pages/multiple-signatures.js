(function showCertInfo() {

    var signMethodSelection = document.querySelector("#sign-method");

    var usbTokenInfo = document.querySelector(".serial-input");
    var mobileSignInfo = document.querySelector(".regis-input");

    signMethodSelection.addEventListener('change', function () {
        var style = this.value == 'usb-token' ? 'flex' : 'none';
        usbTokenInfo.style.display = style;

        var style = this.value == 'mobile-sign' ? 'flex' : 'none';
        mobileSignInfo.style.display = style;
    });
})();

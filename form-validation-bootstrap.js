(() => {
    window.addEventListener('load', () => {
        //Get the forms we want to add validation styles to 
        let forms = document.getElementsByClassName('needs-validation');
        //Loop over and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (e) {
                if (form.checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

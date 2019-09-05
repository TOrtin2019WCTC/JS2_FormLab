// document.ready(function(){
//
 // let form = $('#form1').className('needs-validation');
//
//   $('#form1').on('submit', function(e){
//       if (form.checkValidity() === false){
//           e.preventDefault();
//           e.stopPropagation();
//       }
//       form.classList.add('was-validated');
//   })
//
// });

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
document.addEventListener('DOMContentLoaded', function() {

    // alert('questa è una prova!');

    function insertInfoInDOM() {
        let button = document.getElementById('generate');
        let data = document.getElementById('data');


        button.addEventListener('click', function() {
            data.innerHTML = 'QUESTA E\' UNA PROVA';
        });
    }


    insertInfoInDOM();
});
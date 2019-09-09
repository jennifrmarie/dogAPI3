'use strict';

function getDogImage() {
    let url = "https://dog.ceo/api/breed/" + $('#text').val() + "/images/random/";
    $.getJSON(url)
    .then((res) => {
        let dogArr = res.message
            $('.results-img').append(`  
            <img src='${dogArr}' width="300px" height="300px">`)
            console.log(res);
    })
    .catch((error) => console.log(error));
}





function watchForm() {
    $('#btn').click(event => {
        event.preventDefault();
        $('.results-img').empty();
        getDogImage();
    });
}


$(function () {
    console.log('loaded, waiting for submit');
    watchForm()
});
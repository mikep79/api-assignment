$(document).ready(onReady);

function onReady(){
    $('#random-button').on('click', getStuff);
}

function getStuff(){
    $.ajax({
        type: 'GET',
        url: '/giphy',
        success: function(res){
            console.log(res.data.image_original_url);
            appendStuff(res.data.image_original_url);
        }
    });
}

function appendStuff(obj){
    $('#test').append('<img src="' + obj + '">');
}
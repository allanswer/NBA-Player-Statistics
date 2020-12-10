$( document ).ready(function() {
    console.log( "ready!" );
});



$('.state').on('click', function() {
    console.log($(this).attr('id'));
});

$('#player-form').on('submit', function(){

    // var item = $('form input');
    // var todo = {item: item.val()};
    var playerName = $('#playerName').val();

    $.ajax({
        type: 'POST',
        url: '/profile',
        data: playerName,
        success: function(data){
            //do something with the data via front-end framework
            location.reload();
        }
    });

    return false;

});
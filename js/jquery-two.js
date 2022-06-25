$(document).ready(()=>{
//  console.log('ready')
    $('#callback').click(function(){
        $(this).hide('slow', ()=>{alert("Danke bin mal weg")});
    })

    $('#chain').click(function(){
        setInterval(()=>{
            $(this).css('background-color','black').css('color','white').slideUp(1000).slideDown(1000);
        })
    })

    $('#get').click(()=>{
        console.log( $('span').text());
    })

    $('#la').click(()=>{
        console.log($('input').val());
        $('#setme').text($('input').val())
    })

})

$(document).ready(function(){
    $('.two').hide();

    $('#button-p').click(()=>{
        $('.one').hide();
        $('.two').show();
    })

    $('.hover-me').css("width","300px")
    $('.hover-me').css("height","300px")
    $('.hover-me').css("background-color","red")

    $('.hover-me').hover(function(){
        $(this).css("background-color","green")
    })

    $('#button-yellow').click(()=>{
    $('.hover-me').css("background-color","yellow")

    })

    $('.on').on("click",function(){
        $(this).hide(500)
    })

    $('.toggle').click(()=>{
        $('h3').toggle()
    })

    $('#btn-fadeIn').click(()=>{
        $('#fade-one').fadeIn()
        $('#fade-two').fadeIn('slow')
        $('#fade-three').fadeIn()
    })

    $('#btn-fadeOut').click(()=>{
        $('#fade-one').fadeOut()
        $('#fade-two').fadeOut('slow')
        $('#fade-three').fadeOut()
    })

    $('#btn-fadeToggle').click(()=>{
        $('#fadeTog').fadeToggle(3000)
    })
})
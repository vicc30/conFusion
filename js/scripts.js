$(document).ready(function(){
    $("#myCarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#myCarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $("#myCarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
//This is for login
    //shows up login when clicked
    $('#loginButton').click(function(){
        $('#loginModal').modal("show");
    });
    //button for cancel login
    $('#cancelLogin').click(function(){
        $('#loginModal').modal("hide");
    });
    //button for close
    $('#closeLogin').click(function(){
        $('#loginModal').modal("hide");
    });
// This is for reservation
    //shows reserve modal clicking on reservation
    $('#reserveButton').click(function(){
        $('#reservationModal').modal("show");
    });
    //button for cancel
    $('#reserveCancel').click(function(){
        $('#reservationModal').modal("hide");
    });
    //button for close
    $('#reserveClose').click(function(){
        $('#reservationModal').modal("hide");
    });
});

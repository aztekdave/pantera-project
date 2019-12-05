$(document).ready(function() {
    $('.carousel').carousel({
        interval: 4000, pause: "hover"
    })

    
// Dark mode
    $( ".inner-switch" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
          $( ".inner-switch" ).attr('src', 'images/moon.png');
        } else {
          $( "body" ).addClass( "dark" );
          $( ".inner-switch" ).attr('src', 'images/sun.png');
        }
    });


 // Navbar collapse
$('.navbar-collapse').on('click', function (){

    $('.navbar-collapse').collapse('hide');
});


// Scrollspy
$('body').scrollspy({
    target: '#navigation'
});

$('#navigation a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate ({
            scrollTop: $(hash).offset().top
        },
        1000,
        function () {
        window.location.hash = hash;
    });
}
});

// Fix hamburger navbar collapse
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


// JQuery Tooltip
$( function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );

// Document.ready ends here
});
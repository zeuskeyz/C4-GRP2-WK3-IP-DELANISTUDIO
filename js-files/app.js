
/*  USER INTERFACE LOGIC */

$("document").ready(function() {

    let names = $("#fullNames").val();

    /* ADDS A FTOGGLE FUNCTION BETWEEN THE WWD IMAGES AND THE DESCRIPTION */
    $(".wwd").click(function (e) {

        const clicked = e.target;

        if (clicked.matches("img")) {

            let narration = e.target.previousElementSibling;

            $(clicked).toggle()
            $(narration).toggle()

        }

        else if (clicked.matches("h6") || clicked.matches("small")) {

            let narration = e.target.parentElement.nextElementSibling;

            $(clicked.parentElement).toggle()
            $(narration).toggle()
        }

    });

    /* ADDING TITLES TO PORTFOLIO IMAGES */
    $(".portfolio-pics").hover(function(e) {

        const target = e.target;

        if (target.matches("img")) {

            const titlename = target.alt.toUpperCase();

            $(target).attr("title", titlename);
        }

    });

    /*SETS A TRANSITION TIME ON THE MOUSE'S HOVERING EFFECT */
    $(".mouse").css({transition: 1});

    /* ADDS A HOVERING EFFECT TO THE MOUSE ICON */
    $(".mouse").hover(function() {

        $(this).mouseenter(() =>$(this).css({transform: "translateY(-30px)"}))

        $(this).mouseleave(() => $(this).css({transform: "translateY(0px)"}))
      
    })

    /* ADDS AN ALERT POP UP FUNCTION TO THE SUBMIT BUTTON*/
    $("#submitButton").click(function(){

        let fullNames = $("#fullNames").val();
        alert(`Thanks ${fullNames} for contacting us. \nWe'll be reaching back within 24Hrs`);

    })
   
});

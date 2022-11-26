const fullNames = document.querySelector("#fullNames");
const emailAddress = document.querySelector("#emailAddress");
const clientMessage = document.querySelector("#clientMessage");

/*  USER INTERFACE LOGIC */

$("document").ready(function() {

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
   
});



function sendMail() {

    Email.send({
/*         Host : "smtp.elasticemail.com",
        Username : "shezronn@gmail.com",
        Password : "6252A0DFE08E110609955A6D27E0B6BCF4AD", */
        SecureToken : "189e7e7d-18a8-483e-8616-3a87183c1927",
        To : 'shezron@outlook.com',
        From : emailAddress.value,
        Subject : "DELANI STUDIO CUSTOMER FEEDBACK",
        Body : clientMessage.value
    }).then(
      message => alert(`Thank you ${fullNames.value}. \nYour Message was sent successfully.`)
    );
}

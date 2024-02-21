$(document).ready(function () {
    // bahasa 
    $('#bahasa').click(function () {
        const optBahasa = $('#optionBahasa');
        optBahasa.toggleClass("hidden");
        $('#bEng').click(function () {
            optBahasa.addClass("hidden");
            location.reload();
        });
        $('#bIna').click(function () {
            optBahasa.addClass("hidden");
            location.reload();
        });
    });

    // FAQ
    const [...question] = $(".question");
    const [...answer] = $(".answer");
    const [...plus] = $(".plus");
    for (let i = 0; i < answer.length; i++) {
        $(answer[i]).slideUp();
        $(question[i]).click(function () {
            $(answer[i]).slideToggle();
            $(plus[i]).toggleClass('plus-active');
            // mengembalikan ke keadaan semula yang sudah di klik sebelumnya
            $(".answer").not(answer[i]).slideUp();
            $(".plus").not(plus[i]).removeClass('plus-active');
        });
    }

    // next to login page
    function nextToSignIn() {
        location.href = "signin.html";
    }
    $('#signIn').click(function () {
        nextToSignIn();
    });

});













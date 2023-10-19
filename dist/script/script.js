$('#bahasa').click(function() { 
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

const [...question] = $(".question");
const [...answer] = $(".answer");
const [...plus] = $(".plus");
for(let i = 0; i < answer.length; i++){
    $(answer[i]).slideUp();
    $(question[i]).click(function() {
        $(answer[i]).slideToggle();
        $(plus[i]).toggleClass("plus-active");
    });
}

function nextToSignIn() {
    location.href = "../../login.html";
}

$('#signIn').click(function() {
    nextToSignIn();
});












// language
const bahasa = document.getElementById("bahasa");
bahasa.addEventListener("click", function(){
    const optBahasa = document.getElementById("optionBahasa");
    const bEng = document.getElementById("bEng");
    const bIna = document.getElementById("bIna");
    optBahasa.classList.toggle("hidden");
    bEng.addEventListener("click", function(){
        optBahasa.classList.add("hidden");
    })
    bIna.addEventListener("click", function(){
        optBahasa.classList.add("hidden");
    })
})

const [question1, question2, question3, ...question] = document.querySelectorAll(".question");
const [answer1, answer2, answer3, ...answer] = document.querySelectorAll(".answer");
const [plus1, plus2, plus3, ...plus] = document.querySelectorAll(".plus");
question1.addEventListener("click", function(){
    answer1.classList.toggle("hidden");
    plus1.classList.toggle("rotate-45");
})
question2.addEventListener("click", function(){
    answer2.classList.toggle("hidden");
    plus2.classList.toggle("rotate-45");

})
question3.addEventListener("click", function(){
    answer3.classList.toggle("hidden");
    plus3.classList.toggle("rotate-45");
})

for(let i = 0; i < answer.length; i++){
    question[i].addEventListener("click", function(){
        answer[i].classList.toggle("hidden");
        plus[i].classList.toggle("rotate-45")
    })
}

const ratingCard = document.querySelector(".rating-card")
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const submitBtn = document.querySelector(".sub-btn");


const thankPart = document.querySelector(".part-2");
const selectRate = document.querySelector(".selectRate");


four.addEventListener("click" , ()=>{
    four.classList.add("active");
    selectRate.textContent = "4";
})

five.addEventListener("click" , ()=>{
    five.classList.add("active");
    selectRate.textContent = "5";
})


submitBtn.addEventListener("click" , ()=> {
    ratingCard.style.display = "none";
    thankPart.style.display = "block"
})
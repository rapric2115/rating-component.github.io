// const one = document.getElementById('one');

const btn = document.getElementById('btn');
const thanksPage = document.getElementById('thanks');
const ratingPage = document.getElementById('ratings');
const listRating = document.getElementById('listRating');
const rating = [];

const addClasses = () => {
    thanksPage.classList.remove('d-none');
    thanksPage.classList.add('slide-top');
    ratingPage.classList.add('d-none');

    const ratingValue = document.getElementById('ratingValue');
    ratingValue.innerHTML = rating;
}



listRating.onclick = function(e) {
    //getting rating values and ids 
    const target = e.target.getAttribute('value');
    const id = e.target.getAttribute('id')
    const btn = document.getElementById(id);
    // adding active class to ratings bottons
    // Need adjustment when click on another rating to change class attribute
    // just want to keep it simple for now
    btn.classList.add('active')
    rating.push(target);
}

btn.addEventListener('click', addClasses);


// document.getElementById('idOfElement').classList.add('newClassName');

// const p = document.getElementById("demo");
// p.addEventListener("click", myFunction);
// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
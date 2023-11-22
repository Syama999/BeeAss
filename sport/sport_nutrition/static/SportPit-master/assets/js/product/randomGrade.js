const gradeText = document.querySelectorAll('.reviews-item__grade');

gradeText.forEach(el => {
    const randomGrade = Math.round(Math.random()*10);
    el.children[0].textContent = randomGrade;
})
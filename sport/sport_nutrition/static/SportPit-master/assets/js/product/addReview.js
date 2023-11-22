const reviewsContainer = document.querySelector('.reviews');
const reviewsForm = document.querySelector('.leave-feedback__form');
const reviewsFormCompleted = document.querySelector('.leave-feedback__completed');

const addReviewButton = document.querySelector('.leave-feedback__form button');
const reviewGrade = document.querySelector('.leave-feedback__form input');
const reviewText = document.querySelector('.leave-feedback__form textarea')

reviewGrade.addEventListener('input', () => {
    if (reviewGrade.value > 10) {
        reviewGrade.value = 10;
    } else if (reviewGrade.value < 0) {
        reviewGrade.value = 0;
    }
})

addReviewButton.addEventListener('click', () => {
    if (reviewGrade.value == '') {
        reviewGrade.style.border = '2px solid red';
        reviewGrade.setAttribute('placeholder', 'Нужно ввести оценку')
    } else {
        const name = document.createElement('p');
        name.classList.add('reviews-item__name');
        name.textContent = 'Имя Фамилия';
        const grade = document.createElement('p');
        grade.classList.add('reviews-item__grade');
        grade.textContent = reviewGrade.value + '/10';
        const text = document.createElement('p');
        text.classList.add('reviews-item__text');
        text.textContent = reviewText.value;
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('reviews-item');
        reviewItem.appendChild(name);
        reviewItem.appendChild(grade);
        reviewItem.appendChild(text);
        reviewsContainer.appendChild(reviewItem);
        // Clear fields
        reviewGrade.value = '';
        reviewText.value = '';

        // Thx for feedback anim
        reviewsFormCompleted.style.display = 'flex'
        setTimeout(() => {
            reviewsFormCompleted.style.opacity = '100';
            reviewsForm.style.transform = 'translateY(100%)';
        }, 300)
    }
});
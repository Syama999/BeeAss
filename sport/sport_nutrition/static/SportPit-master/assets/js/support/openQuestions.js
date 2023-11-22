const faqQuestion = document.querySelectorAll('.faq-question');
faqQuestion.forEach(el => {
    el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('faq-answer__hidden');
        el.classList.toggle('faq-question__faq-answer-visible');
        el.lastChild.previousSibling.classList.toggle('faq-question-icon__answer-visible');
    })
})
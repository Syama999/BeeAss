// Close/Open filters
const filtersIcon = document.querySelector('.fa-filter');
const closeFiltersContainerIcon = document.querySelector('.filters-container .fa-times');
const filtersContainer = document.querySelector('.filters-container');
const main = document.querySelector('main');

function toggleFiltersContainer (button) {
    button.addEventListener('click', () => {
        filtersContainer.classList.toggle('filters-container-open');
        main.classList.toggle('main-filters-open')
    });
}
toggleFiltersContainer(filtersIcon);
toggleFiltersContainer(closeFiltersContainerIcon);

const dropdownButton = document.getElementById('dropdownButton');
const submitionForm = document.getElementById('submitionForm');
const filterButton = document.getElementById('filter-button');
const filterContainer = document.getElementById('filter-container');
const filters = document.getElementById('filters-div');
const dropSideE= document.querySelectorAll('#filterBtn li')
const filterableCards= document.querySelectorAll('.gridRessources')

// show all the ressources by clicking on the Elements button

filterButton.addEventListener('click', function() {
  filters.classList.toggle('hidden')
  if(!filterButton.classList.contains('active')){
    document.querySelector('.active').classList.remove('active')
    filterButton.classList.add('active')
    filterableCards.forEach(gridRessources => {
      gridRessources.classList.remove('hidden')
    })
  }
});

dropdownButton.addEventListener('click', function() {
  submitionForm.classList.toggle('hidden');
});

// Function to reset form values
function resetForm() {
  const inputs = submitionForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.value = ''; // Clear input and textarea values
  });
  // reset select element value
  const select = submitionForm.querySelector('select');
  if (select) {
    select.selectedIndex = 0; // Reset to first option
  }
}

// Close form and reset values on click outside
document.addEventListener('click', (event) => {
  if (!submitionForm.contains(event.target) && !dropdownButton.contains(event.target)) {
    submitionForm.classList.add('hidden');
    resetForm();
  }
});

// filter card function
const filterCards = (e) => {
  document.querySelector('.active').classList.remove('active')
  console.log(e.target)
  e.target.classList.add('active')

  filterableCards.forEach(gridRessources => {
    gridRessources.classList.add('hidden')
    if(gridRessources.dataset.name === e.target.dataset.name) {
      gridRessources.classList.remove('hidden')
    }
  })
}

// // add click event listener to each selecting li element
dropSideE.forEach(li => li.addEventListener('click',filterCards))




const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value ;
  console.log(searchText);
    

searchField.value = '';
const url = ` http://openlibrary.org/search.json?q=${searchText}`;
console.log(url);
fetch(url)
.then(res => res.json())
.then(data => console.log(data ))
}


// const displaySearchResult = meals =>{
//   // console.log(meals);
//   const searchResult = document.getElementById('search-result');
//   meals.forEach(meal => {
//     console.log(meal);
//     const div = document.createElement('div');
//     div.classList.add('col');
//     div.innerHTML = `
//     <div onClick= "loadMealDetai(${meal.idMeal})" class="card h-100">
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${meal.strMeal}</h5>
//       <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
//     </div>
//   </div>
//     `;
//     searchResult.appendChild(div);
//   })
// }
// const loadMealDetail = mealId => {
//   console.log(mealId);
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //-------------Clear Data ----------------
    searchField.value = '';
    if(searchText === ''){
        // console.log('no book found');
        alert('Enter Any Text to Search');
    }
    else{
         //--------------load Data----------------
    const url = `https://openlibrary.org/search.json?q=${searchText}
    `;
        // console.log(url);
    fetch(url)
    .then( res => res.json())
    .then(data => displaySearchResult(data.docs)); 
    }
}


const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    //Clean Books 
    searchResult.textContent = '';
    
    if(books.length === 0 ){
        //show error (if no result found)
        alert('No book Found');
    }
    else{
        document.getElementById('data-found').innerText = `${books.length} Books Found`;
    books.forEach(docs => {
        // console.log(docs);
        //Show Books Founded
        console.log(docs.num_found)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="loadBookDetail(${docs.title})" class="card h-100">
             <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="No Image found for this Book">
            <div class="card-body">
              <h5 class="card-title">${docs.title}</h5>
              <p class="card-text">Book Author: ${docs.author_name}</p>
              <p class="card-text">First Published in: ${docs.first_publish_year}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
        // console.log(docs.numFound[0]);
    });
}
}


// const loadBookDetail = bookId => {
//     console.log(bookId);
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${bookId}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayBookDetail(data.docs[0]))
// }

// const div = document.createElement('div');
        // div.classList.add('col');
        // div.innerHTML =`
        //     <div class="card-body">
            
        //       <p class="card-text">No Book Found</p>
        //     </div>
        // `;
        // searchResult.appendChild(div);

// const displayBookDetail = meal => {
//     console.log(meal);
//     const BookDetails = document.getElementById('book-details');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${meal.strMeal}}</h5>
//               <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
//               <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//             </div>

//     `;
//     BookDetails.appendChild(div);
// }

const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value ;
//   console.log(searchText);
    

searchField.value = '';
// searchText validation
if(searchText ===''){
document.getElementById('data-found').innerText = 'Enter Any Text';
}
else{
  const url = ` http://openlibrary.org/search.json?q=${searchText}`;
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.docs));
  }
  
}


const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(books.length === 0 ){
 //................show error (if no result found).....

 document.getElementById('data-found').innerText = 'No book found';
     }
     else{

  //.....................  Books founded Number.............
  document.getElementById('data-found').innerText = `${books.length} Books Found!!!` ;


      books.forEach(docs => {
        // console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="loadBookDetail(${docs.bookId})" class="card h-100">
             <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="No Image found for this Book">
            <div class="card-body">
              <h5 class="card-title">${docs.title}</h5>
              <p class="card-text"> Author Name: ${docs.author_name}</p>
              <p class="card-text">First Publish Year: ${docs.first_publish_year}</p>
              
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    });
}

     }

  




























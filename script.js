const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //-------------Clear Data ----------------
    searchField.value = '';
    if(searchText === ''){
        // console.log('no book found');
        // alert('Enter Any Text to Search');
        document.getElementById('data-found').innerText = `Enter Any Text to Search`;

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
        // alert('No book Found');
        document.getElementById('data-found').innerText = `No Books Found`;
    }
    else{
             //Show Books Founded
        document.getElementById('data-found').innerText = `${books.length} Books Found`;
    books.forEach(docs => {
        // console.log(docs);
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

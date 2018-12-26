console.log('Test')
// Bool Class: Represent a book
class Book {
    constructor(title, author, isbn){
         this.title = title;
         this.author = author;
         this.isbn = isbn;
    }

}


// UI Class: Handel UI Tasks

class UI {
    static displayBooks() {
        const StoredBook = [
            {
                title: 'Book One',
                author: 'Adam Mawlawi',
                isbn: '3434434'
            },
            {
                title: 'Book One',
                author: 'Adam Mawlawi',
                isbn: '3434434'
            }
        ];

        const books = StoredBook;

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href='#' class='btn btn-danger btn-sm delete'>x</a></td>
        `;
        list.appendChild(row)
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
    }

    static clearFields(){ 
         document.querySelector('#title').value = '';
         document.querySelector('#author').value = ''
         document.querySelector('#isbn').value = ''
    }
}


// Store Class: Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
     // Prevent actual sybmit

     e.preventDefault();
    // Get from values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate
     if(title === '' || author === '' || isbn === ''){
        alert('Please fill in all field');
     } else {

    // Instatiate book
    const book = new Book(title, author, isbn);
    
    // Add book to UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();

     }

   

})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => { 
    UI.deleteBook(e.target)
})


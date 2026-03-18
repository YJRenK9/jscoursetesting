let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // if user fills in the book info (and the page count is a numeric value), add the book to the list 
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // create the book
        const book = {
            name: bookName,
            authorName: authorName,
            description: bookDescription,
            pageCount: pagesNumber
        };
        // add the book to the system
        books.push(book);
        // display the added books
        showBooks();
    } else {
        // display error message
        alert('Please fill in all fields correctly.');
    }
}

function showBooks() {
    // creates a new array of HTML tags
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.description}</p>
        <p><strong>No. of Pages: </strong>${book.pageCount} page(s)</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="removeBook(${index})">Remove</button>
    `);
    // display all the added book info onto the webpage (use join('') on an array to put all the elements into a string)
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Although bold and strong are visually the same, strong provides more importance in the accessibility tree (makes website structure clearer to understand)

function editBook(index) {
    const book = books[index];
    
    book.name = document.getElementById('bookName').value;
    book.authorName = document.getElementById('authorName').value;
    book.description = document.getElementById('bookDescription').value;
    book.pageCount = document.getElementById('pagesNumber').value;

    showBooks(); 
}

function removeBook(index) {
    const book = books[index];

    books.splice(index, 1);

    showBooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

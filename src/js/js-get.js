// fetch('http://localhost:4004/books').then(response => response.json()).then(date => { console.log(date) });

async function getBooks() {
    try {
        const response = await fetch('http://localhost:4004/books');
    const data = await response.json();
     console.log(data);
    } catch (error) {
        console.log(error.message)
    } 
};

async function getBookById(id) {
    try {
       const response = await fetch(`http://localhost:4004/books/${id}`);
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error.message)
    }
};
getBooks();
getBookById(2);
getBookById(8);
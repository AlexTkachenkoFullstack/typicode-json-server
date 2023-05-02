// fetch('http://localhost:4004/books').then(response => response.json()).then(date => { console.log(date) });

const BASE_URL = 'http://localhost:4004';
async function getBooks() {
    try {
        const response = await fetch(`${BASE_URL}/books`);
    const data = await response.json();
     console.log(data);
    } catch (error) {
        console.log(error.message)
    } 
};

async function getBookById(id) {
    try {
       const response = await fetch(`${BASE_URL}/books/${id}`);
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error.message)
    }
};
getBooks();
getBookById(2);
getBookById(8);



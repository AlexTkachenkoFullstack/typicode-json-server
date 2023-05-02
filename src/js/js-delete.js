
const BASE_URL='http://localhost:4004/books'
function deleteBook(id) {
    return fetch(`${BASE_URL}/${id}`, { method:'DELETE'}).then(response=>response.json())
}
deleteBook(4)
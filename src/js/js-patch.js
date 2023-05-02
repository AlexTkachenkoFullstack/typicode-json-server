

const BASE_URL = "http://localhost:4004/books/";
const book1 = {
      title: "Hello",
}

async function patchBook(book, id) {
  const options = {
    method: "PATCH",
    body: JSON.stringify(book),
    headers: {
      "Content-Type":"application/json"
    }
  }
  try {
    const response = await fetch(`${BASE_URL}${id}`, options);
    const data = await response.json();
    return data
  } catch (error) {
     console.log(error.message)
  }
}
patchBook(book1, 14)


const book1 = {
      title: "Folk",
      author: "Hawkins",
      ganres: [
        "classic"
      ],
      raiting: 8.74
}
   

const BASE_URL = 'http://localhost:4004/books/'
async function postBook(book) {
  const option = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type':'application/json'
    }
  }
  try {
    const response = await fetch(`${BASE_URL}`, option);
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}

postBook(book1).then(data=>{console.log(data.id)})
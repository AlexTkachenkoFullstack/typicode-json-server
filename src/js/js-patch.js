const item = {
    id: 1,
    title: "Car",
    author: "Esenin",
    ganres: ["classic"],
    raiting: 6.34
};

const options = {
    method: "PATCH",
    body: JSON.stringify(item), 
    headers: {
    "Content-Type": "application/json; charset=UTF-8",
  }
}
fetch("http://localhost:4004/books/1", options)
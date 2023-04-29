const item={
        "title": "Stone",
        "author":"Lesya",
        "ganres": ["story"],
        "raiting":6.34}
const options = {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
}
fetch("http://localhost:4004/books", options)
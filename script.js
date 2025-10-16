// Función para buscar libros
const searchBar = document.getElementById("searchBar");
const books = document.querySelectorAll(".book-card");

searchBar.addEventListener("keyup", (e) => {
  const searchText = e.target.value.toLowerCase();

  books.forEach((book) => {
    const title = book.querySelector("h2").textContent.toLowerCase();
    const author = book.querySelector("p").textContent.toLowerCase();

    if (title.includes(searchText) || author.includes(searchText)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

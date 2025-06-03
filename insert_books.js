// Task 2: Basic CRUD Operations

//use plp_bookstore

db.createCollection("books")
db.books.insertMany([
  {
    title: "The Silent Killer",
    author: "Petre J",
    genre: "Thriller",
    published_year: 2015,
    price: 200.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Becoming alive",
    author: "Ochiang",
    genre: "Biography",
    published_year: 2019,
    price: 250.00,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "Running Continues",
    author: "King Orwell",
    genre: "Dystopian",
    published_year: 2021,
    price: 150.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Educated",
    author: "Pham L",
    genre: "Memoir",
    published_year: 2018,
    price: 138.50,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "The Midnight Library",
    author: "Nyuon J",
    genre: "Fantasy",
    published_year: 2020,
    price: 165.75,
    in_stock: true,
    pages: 304,
    publisher: "Canongate Books"
  },
  {
    title: "Sapiens",
    author: "James Khalifa",
    genre: "History",
    published_year: 2014,
    price: 220.00,
    in_stock: false,
    pages: 464,
    publisher: "Harper"
  },
  {
    title: "Fly to sky",
    author: "Pascal N",
    genre: "Science Fiction",
    published_year: 2001,
    price: 190.00,
    in_stock: true,
    pages: 412,
    publisher: "Chilton Books"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Dr Kai",
    genre: "Fiction",
    published_year: 1999,
    price: 110.50,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "The Great Gatsby",
    author: "Gaint Classic",
    genre: "Classic",
    published_year: 2000,
    price: 245.99,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "Atomic Habits",
    author: "James Ochiang",
    genre: "Self-help",
    published_year: 2018,
    price: 195.00,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  }
]);
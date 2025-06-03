// B. Queries – queries.js


// find all books in specific genre
db.books.find({ genre: "Fantasy" })


// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })


// Find books by a specific author
db.books.find({ author: "James Khalifa" })


// Update the price of a specific book
db.books.updateOne(
  { title: "Educated" },
  { $set: { price: 280.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "To Kill a Mockingbird" })
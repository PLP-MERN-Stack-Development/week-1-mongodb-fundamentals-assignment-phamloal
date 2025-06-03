// Task 3: Advanced Queries

// Find books in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})


// Projection: return only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })


// Sort by price ascending
db.books.find().sort({ price: 1 })


// Sort by price descending
db.books.find().sort({ price: -1 })


// Pagination (page 1, 5 per page)
db.books.find().limit(5).skip(0)


// Page 2 (skip 5)
db.books.find().limit(5).skip(5)
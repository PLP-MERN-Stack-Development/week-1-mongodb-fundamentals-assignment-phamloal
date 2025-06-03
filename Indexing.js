// Task 5: Indexing

// Index on title
db.books.createIndex({ title: 1 });


// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })


// Use explain() to analyze performance
db.books.find({ title: "Educated" }).explain("executionStats")

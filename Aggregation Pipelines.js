// Task 4: Aggregation Pipelines

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])


// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])


// Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [ { $substr: [ "$published_year", 0, 3 ] }, "0s" ] }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  }
])
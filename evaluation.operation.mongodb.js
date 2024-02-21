use("esports-imdb");

// db.movies.find();

// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });
// ?Evaluation operation
// 1
//? find movies whose name includes "Morty"
// db.movies.find({ name: { $regex: "Morty", $options: "i" } });

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

// db.sales.find();

// ?find products whose oder is greater than volume

// ?2) $expr=> (order>volume)
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });
// db.sales.find({ order: { $gt: 50 } });

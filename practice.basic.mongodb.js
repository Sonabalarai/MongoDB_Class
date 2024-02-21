use("Netflix");

// db.movie.insertOne({
//   name: "Cast away",
//   leadActor: "Tom Hanks",
//   releaseYear: 2002,
//   length: 120,
// });

// db.movie.find();

// ?add another movie
// db.movie.insertOne({
//   name: "Batman",
//   leadActor: "Christin Bale",
//   releaseYear: 2000,
//   length: 90,
// });

// db.movie.find();

// db.movie.insertMany([
//   {
//     name: "Chakka panja",
//     leadActor: "Deepak Giri",
//     releaseYear: 2017,
//     length: 180,
//   },
//   {
//     name: "12th fail",
//     leadActor: "Vikrant Massey",
//     releaseYear: 2023,
//     length: 90,
//   },
// ]);
// db.movie.find();

// ?find movie with length 90
// db.movie.findOne({ length: 90 });

// db.movie.findOne({ leadActor: "Vikrant Massey" });

// db.movie.findOne({ name: "Chakka panja" });

// db.movie.find({ releaseYear: 2017 });
// find =>return array
// db.movie.find();

// ?Edit
// ?change releaseYear of chakka panja to 2020
// db.movie.updateOne({ name: "Chakka panja" }, { $set: { releaseYear: 2020 } });
// db.movie.find();
// db.movie.updateOne({ name: "Batman" }, { $set: { name: "Batman Return" } });
// db.movie.find();

// db.movie.updateOne(
//   { name: "Cast away" },
//   { $set: { length: 90, releaseYear: 2000 } }
// );
// db.movie.find();

// ?updateMany()
// db.movie.updateMany({ length: 90 }, { $set: { length: 75 } });
// db.movie.find();

// ?delete movie whose main role is played by vikrant massey
// db.movie.deleteOne({ leadActor: "Deepak Giri" });
// db.movie.find();

// db.movie.deleteMany({ length: 75 });
db.movie.find();

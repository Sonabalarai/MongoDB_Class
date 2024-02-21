use("esports-imdb");

//? aggregation is also read operation and makes no changes on database

// ?pipeline stages
// ?$match=>1st stage=>filters
// ?$sort
// ?$project=>select fields =>2nd stage
// ?$unwind
// ?$lookup
// ?$limit
// ?$group=>remind

// db.movies.find();
// ?$match
// db.movies.aggregate([
//   { $match: { status: "Ended", "rating.average": { $gte: 7 } } },
//   //   { $project: { name: 1, status: 1, rating: 1 } },
//   //? creating/renaming the new field for existing on
//   {
//     $project: {
//       name: 1,
//       status: 1,
//       rating: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// db.movies.aggregate([
//   { $match: { status: "Running", "rating.average": { $gte: 8 } } },
//   { $project: { name: 1, status: 1 } },
// ]);
// db.movies.find().count();

// db.movies.aggregate([
//   { $match: { "rating.average": { $gt: 8 } } },
//   {
//     $project: {
//       name: 1,
//       ratingAverage: "$rating.average",
//       scheduleDay: { $first: "$schedule.days" }, //for first item of array

//       genres: 1,
//       nextGenres: { $arrayElemAt: ["$genres", 1] },
//       lastGenres: { $last: "$genres" },
//     },
//   },
// ]);

// ?$sort=>sort documents based upon value and field provided
// 1=>small to large
// -1=>large to small
// db.movies.aggregate([
//   { $match: { "rating.average": { $gt: 8 } } },
//   {
//     $project: {
//       name: 1,
//       ratingAverage: "$rating.average",
//       scheduleDay: { $first: "$schedule.days" }, //for first item of array

//       genres: 1,
//       nextGenres: { $arrayElemAt: ["$genres", 1] },
//       lastGenres: { $last: "$genres" },
//     },
//   },
//   {
//     $sort: {
//       //   ratingAverage: 1,
//       ratingAverage: -1,
//     },
//   },
// ]);

// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);
// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a4d5a4f0ff506a7e924f"),
// });

// ?$lookup
db.vehicles.aggregate([
  {
    $match: {},
  },
  {
    $lookup: {
      from: "owners",
      localField: "ownerId",
      foreignField: "_id",
      as: "ownerDetails",
    },
  },
  {
    $project: {
      name: 1,
      brand: 1,
      color: 1,
      cc: 1,
      ownerName: { $first: "$ownerDetails.name" },
    },
  },
]);

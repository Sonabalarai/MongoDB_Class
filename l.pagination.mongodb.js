use("esports-imdb");

// ?pagination
// ?$skip
// ?$limit
// db.movies.find();

// let page = 2;
// const limit = 10;

// let skip = (page - 1) * limit;
// db.movies.aggregate([
//   { $match: {} },//{}=>match all
//   { $skip: skip },//first skip than only limit
//   { $limit: limit },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//       _id: 0,
//     },
//   },
// ]);

// let skip = (page - 1) * limit;
// let searchText="G"
// db.movies.aggregate([
//   { $match: {name:{$regex:"searchText","$optional":"i"}} },
//   { $skip: skip },
//   { $limit: limit },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//       _id: 0,
//     },
//   },
// ]);

// ?$lookup

db.owners.insertMany([
  { name: "Kamal", address: "Surkhet" },
  { name: "Laxman", address: "Lalitpur" },
  { name: "Arun", address: "Tripureshwor" },
]);

// db.owners.find();

db.vehicles.insertOne({
  name: "FZ",
  brand: "Yamaha",
  cc: 250,
  color: "blue",
  ownerId: ObjectId("5d5a4d5a4f0ff506a7e924f"),
});

// ?$lookup
// db.vehicles.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
// ]);

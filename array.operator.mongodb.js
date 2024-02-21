use("esports-imdb");

// Array read operation
// $all
// $eleme

// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);
// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });
// db.students.find();

// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });
// ?1)$all =>use garna ko lage field must be array
// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

// ?2)$size=>it does not accept range such as $gt,$lt

// ?find student who has 2 favorite singers
// db.students.find({ favoriteSingers: { $size: 2 } });

// ?find student who has 3 favorite singers
// db.students.find({ favoriteSingers: { $size: 3 } });

// ?find students who has only one hobbies
// db.students.find({ hobbies: { $size: 1 } }); //size=1 since hobbies inside ko array ma only 1 object xa so

// ?3)elemMatch
// db.students.find({
// //   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],

// });

// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });

// ?find student whose hobbies is "Singing"
// and frequency is greater than equal to 5
// ?$eleMatch
// db.students.find({
//   hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
// });

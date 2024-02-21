use("esports-imdb");

// db.friends.find();

// ?$ =>use during multiple data with same name and need to be changed
// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Math" },
//   { $set: { "scores.$.sub": "Nepali" } }
// );

// db.friends.updateOne({name:"sona"},{$set:{""}})

// ?$[]=>make change for all
// db.friends.updateOne({ name: "sona" }, { $set: { "scores.$[].point": 70 } });

// db.friends.updateOne(
//   { name: "sona", "scores.sub": "Math" },
//   { $set: { "scores.$.point": 65 } }
// );
// db.friends.updateOne({ name: "sona" }, { $inc: { "scores.$[].point": -10 } });

db.friends.find();

// ?
// db.friends.updateOne(
//   { name: "Subeksha", hobbies: "Cricket" },
//   { $set: { "hobbies.$": "Football" } }
// );

// db.friends.updateOne(
//   { name: "Subeksha" },
//   { $set: { "scores.$[item].point": 70 } },
//   {
//     arrayFilters: [{ "item.point": { $gte: 65 } }],
//   }
// );

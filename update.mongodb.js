use("esports-imdb");

// db.friends.find();
// $set,$inc=>for numeric value apply=>increases existing value

// db.friends.updateOne({ name: "Alish" }, { $set: { name: "sona" } });
// db.friends.find();

// db.friends.updateMany(
//   { name: "Unique" },
//   { $set: { name: "Jibana", age: 21, contactNumber: "9854763217" } }
// );
// db.friends.find();

// db.friends.updateOne(
//   { name: "Prakash" },
//   { $set: { age: 22, contactNumber: "985102345" } }
// );

// db.friends.updateOne(
//   { _id: ObjectId("659fbbac8e46b28b92d7033c") },
//   { $set: { age: 22, contactNumber: "985102345" } }
// );

// db.friends.find();

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Subeksha",
//       age: 20,
//       contactNumber: "984567892",
//       isNepali: true,
//     },
//   }
// );
// db.friends.find();

// ?update age of Jibana by 40=>$inc=>age=age+40  or age-40

// db.friends.updateOne({ name: "Jibana" }, { $inc: { age: 40 } });
// db.friends.find();

// ?decrease
// db.friends.updateOne({ name: "Jibana" }, { $inc: { age: -40 } });
// db.friends.find();

// db.friends.updateMany({}, { $inc: { age: 10 } });=>{} this  empty since it compare for all
// db.friends.find();

// ?$mul=>multiplies field by provieded value
// db.friends.updateOne({ name: "Subeksha" }, { $mul: { age: 2 } });
// db.friends.find();

// ?divide age of Prithvi by 2
// db.friends.updateOne({ name: "Subeksha" }, { $mul: { age: 0.5 } });
db.friends.find();

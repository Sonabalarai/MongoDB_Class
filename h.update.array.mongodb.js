use("esports-imdb");
// update operator ?$push,$pop,$pull,$pullAll

// ?array update
// ?$push=>add /insert new value to the field
// db.friends.updateOne({ name: "sona" }, { $push: { hobbies: "Dancing" } });
// db.friends.find();

// ?multiple value push

// db.friends.updateOne(
//   { name: "sona" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }
// );
// db.friends.find();

// db.friends.updateOne({ name: "sona" }, { $push: { hobbies: "Cardio" } });

// ?$addToSet=>push value to array if there is not exist already
// db.friends.updateOne({ name: "sona" }, { $addToSet: { hobbies: "Singing" } });

// ?multiple value add
// db.friends.updateOne(
//   { name: "sona" },
//   { $addToSet: { hobbies: { $each: ["Singing", "Playing"] } } }
// );

// db.friends.find();

// ?$pop =>-1(removes value from 1st index) and 1(remove item from last index)
// db.friends.updateOne({ name: "Jibana" }, { $pop: { hobbies: -1 } });
// db.friends.find();
// ?remove item from last is 1
// db.friends.updateOne({ name: "sona" }, { $pop: { hobbies: 1 } });
// db.friends.find();

// ?$pull=>removes the item from a n array by seeing the conditions
// ?$pullAll()=>matching values sabi remove garxa

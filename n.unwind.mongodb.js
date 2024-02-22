use("esports-relation");

// db.teachers.insertOne({
//   name: "Sona",
//   hobbies: ["Basketball", "FootBall", "Vollyball"],
// });

db.teachers.aggregate([{ $match: {} }, { $unwind: "$hobbies" }]);

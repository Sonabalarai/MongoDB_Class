use("esports-relation");

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

// db.students.insertOne({
//   name: "Rina",
//   address: "kalanki",
//   email: "rina@gmail.com",
//   enrolledCoursesIds: [
//     ObjectId("65d5aafc78fc9f127f25f9fd"),
//     ObjectId("65d5aafc78fc9f127f25f9fe"),
//   ],
// });

db.students.aggregate([
  { $match: {} },
  {
    $lookup: {
      from: "courses",
      localField: "enrolledCoursesIds",
      foreignField: "_id",
      as: "courseDetails",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      email: 1,
      "courseDetails.name": 1,
      "courseDetails.duration": 1,
    },
  },
]);

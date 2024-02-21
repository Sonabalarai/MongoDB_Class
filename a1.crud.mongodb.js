use("Udemy");

// ?Insert / add courses on to the table using database udemy
// ?1)insertOne
//db.course.insertOne({ name: "MERN", duration: 90, price: 22000 });
// db.course.find();

// ?2)insertMany
// db.course.insertMany(
//   { name: "Python", duration: 200, price: 24000 },
//   { name: "Java", duration: 150, price: 25000 },
// ]);
// db.course.find();

// ?get or read
// ?findOne=> one item at a time the first matcheed one and find()=>multiple value
// ?3)findOne
// db.course.findOne({ name: "Java" });

// ?4)find
// db.course.find({});

// ?Update=>change to the existing data
// ?5)updateOne()
// db.course.updateOne(
//   { name: "Python" },
//   {
//     $set: {
//       price: 9000,
//     },
//   }
// );
// db.course.find();

// ?6)updateMany()
//db.course.insertOne({ name: "MERN", duration: 90, price: 2000 });

// db.course.updateMany({ name: "MERN" }, { $set: { price: 10000 } });
// db.course.find();

// ?7)deleteOne()
// db.course.deleteOne({ price: 22000 });
// db.course.find();

// ?8)deleteMany()
// db.course.deleteMany({ price: 10000 });
// db.course.find();

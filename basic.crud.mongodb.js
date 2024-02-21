// use("Boardway");
use("daraz");
// db.course.insertOne({ name: "Python" });
//? insertOne or insertMany
// db.student.insertOne({ name: "MERN", duration: 90 });
// db.course.find();
// db.student.find();

// db.product.insertOne({ name: "Bottle", brand: "serve well", price: 400 });
// db.product.insertOne({
//   name: "noodle",
//   brand: "Wai Wai",
//   price: 20,
// });

// db.product.insertOne({ name: "Rice cooker", brand: "Samsung", price: 4000 });

// db.product.insertMany([
//   {
//     name: "Shampoo",
//     brand: "Sunsilk",
//     price: 400,
//   },
//   {
//     name: "hair oil",
//     brand: "Dabur",
//     price: 500,
//   },
// ]);
// db.product.find();

//  customer using insertOne or insertMany
// db.customer.insertOne({ name: "sona", address: "Ilam", age: 24 });
// db.customer.find();

// ?read or get
// ?findOne=>only one item return that matches first, find=>multiple
// db.product.findOne({ name: "Bottle" });

// ?find
// db.product.find({ price: 400 });

// ?delete=>delete item permanently from db ,deleteMany
// db.product.deleteMany({ name: "hair oil" });
// db.product.find();
// ?deleteMany=>deletes multiple item that are matches
// db.product.deleteMany({ price: 400 });
// db.product.find();

// ?update
// ?updateOne , updateMany
// ?updateOne
// db.product.updateOne(
//   { name: "noodle" },
//   { $set: { price: 40000, brand: "Universe" } }
// );

// db.product.find();

// ?updateMany
// db.product.updateMany(
//   { name: "Rice cooker" },
//   {
//     $set: {
//       price: 20,
//     },
//   }
// );

db.product.find();

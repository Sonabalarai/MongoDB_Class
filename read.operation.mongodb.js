use("esports-imdb");

// db.movies.find();
// ?comparision operator $eq=>===,$lt=>less than,$lte=>less than equal
//? $gt=greater than,$gte=greater than equal,$ne=not equal(!==),

// ?find movies whose language is Japanese
// db.movies.find({ language: { $eq: "Japanese" } }); or
// db.movies.find({ language:  "Japanese"  });

// ?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lt: 30 } });

// ? find movies whose runtime is greater than 90
// db.movies.find({ runtime: { $gt: 90 } });

// ? find movies whose rating is less than or equal to 6
// db.movies.find({ "rating.average": { $lte: 6 } });

// ? find movies whose runtime is greater than or equal to 90
// db.movies.find({ runtime: { $gte: 90 } });

// ? $ne
// language!=="English"

// ?find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ?find movies whose weight is not 75
// db.movies.find({ weight: { $ne: 75 } });vies whose genre include only Thriller
// db.movies.find({genres:["Thriller"]})
// db.movies.find({ genres: "Crime" });

// ?only Crime include
// db.movies.find({ genres: ["Crime"] });
// ?find movies that must have drama

// ? 2) logical Operator
// ? $and,$or,$not,$nor
// ?find movies whose weight is greater than 75 anf rating is greater than 7
// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });

// ?find movies whose genres is "Drama" and "Crime"
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

// ?
// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

// ?find movies whose rating is greater than 7 and less than equal to 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

// ?equivalent code $and ko short cut
// db.movies.find({ type: "Scripted", language: "English" });

// db.movies.find("rating.average",{$gt:7,9})

// ?
// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });

// ?find movies whose id is less than 5 or
// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $gt: 75 } }] });

//? 1)Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });
// ?2)find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });
// ?3)find movies whose rating is greater than 7 and less than 9
// db.movies.find({ "rating.average": { $gt: 7, $lt: 9 } });

// ?4)find movies whose genres is Thriller
// db.movies.find({ genres: ["Thriller"] }); //only Thriller
// db.movies.find({ genres: "Thriller"}); // it must have Thriller at least
// ?find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ status: "Ended", runtime: 60 });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({ weight: 75, "network.country.name": "Canada" });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

// ?find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ? $nor
// ?find movies which is neither thriller nor drama
// db.movies.fin({$nor:[{genres:"Thriller"},{genres:"Drama"}]})

// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

// ? $or ko alternative for multiple or option to print=>{$in}
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

// ?find movies whose genres is
// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

// ?alternative of $nor is $nin=>if $nor is applied on same field then we can use $nin
db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });

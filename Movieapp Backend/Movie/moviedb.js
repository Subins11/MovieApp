//importing Mongoose
const mongoose = require("mongoose");

//Connect to the Database
mongoose.connect("mongodb+srv://Subin_S:Subin@cluster0.y9zoefe.mongodb.net/?retryWrites=true&w=majority");

//creating Schema

const Schema = mongoose.Schema;
 var movieSchema = new Schema({
    movieName : String,
    movieActor : String,
    movieActress : String,
    movieDirector : String,
    movieYear : Date,
    movieCamera : String,
    movieProducer : String,
    movieLanguage : String

 });

var movieDetails = mongoose.model("movies",movieSchema);

//exporting module
module.exports = movieDetails;



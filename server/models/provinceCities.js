import mongoose from 'mongoose';
const citiesSchema = mongoose.Schema({

    province : String,
    cities : Array


})
const citiesModel = mongoose.model('citiesModel' , citiesSchema)
export default citiesModel
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowShema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  dateOfStart: {
    type: Date
  },
  posterImage: {
    type: String
  },
  longDescription: {
    type: String
  },
  shortDescription: {
    type: Date
  },
  Priority: {
    type: Number
  },
  DateOfPublish: {
    type: Date
  },
  LastModifiedDate: {
    type: Date
  },
  VideoFragmentUrl: {
    type: String
  },
  UserRating: {
    type: Number
  },
  seasons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Season'
  }]
})

module.exports = mongoose.model('Show', ShowShema)
/*
ID
Title
Subtitle
DateOfStart
PosterImage //(likely in couple of different dimensions e.g square, wide, extra-wide)
LongDescription
ShortDescription
Priority //(certain show can possibly be a major one,  so it could be advertised on the main page of the site)
DateOfPublish //(not editable)
LastModifiedDate //(not editable)
VideoFragmentUrl
UserRating
*/
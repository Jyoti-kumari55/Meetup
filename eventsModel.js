const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema ({
  name: { 
    type: String, 
    required: true 
  },
  photoUrl: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
})

const eventSchema = new mongoose.Schema ({
  id: {
    type: Number,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  hostedBy: {
    type: String,
    required: true
  },
  dressCode: {
    type: String,
    required: true
  },
  ageRestrication: {
    type: String,
    required: true
  },
  eventTags: [{
    type: String
  }],
  price: { 
    type: Number,
    required: true
  },
  daysOfEvent: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  noOfSpeaker: {
    type: Number,
    required: true
  },
  speakerDetails: [speakerSchema],
  details: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Event = mongoose.model("Events Data", eventSchema)

module.exports = Event;
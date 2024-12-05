require('./dbConnect');
const express = require("express");
const app = express();
const cors = require("cors");
const Event = require('./eventsModel');
const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello! Lets meetup at the events.")
});

async function readAllEvents() {
    try{
      const allEvents = await Event.find()
      return allEvents;
    }catch(error){
      throw error
    }
  }
  
  app.get('/events', async(request, response) => {
    try {
      const events = await readAllEvents();
      // console.log(events)

      if(events.length !== 0) {
        response.json(events)
      }else {
        response.status(404).json({error: "No events data found.."})
      }
    }catch(error){
        console.error(error);
      response.status(500).json({error: "Failed to fetch Events."})
    }
  });
  
  async function createEvent(newEvent) {
    try{
      const events = new Event(newEvent);
      const saveEvent = await events.save();
      return saveEvent;
      
    }catch(error){
      throw error
    }
  }
  
  app.post('/events', async(request, response) => {
    try{
      const savedEvent =  await createEvent(request.body);
      response.status(201).json({message: "Event added successfully.", event: savedEvent })
    }catch (error) {
      response.status(500).json({error: "Failed to add Event."})
    }
  })
  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}.`);
})
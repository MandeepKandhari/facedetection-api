const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Clarifai = require('clarifai');



const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
	res.json('This application is working')
})

app.post('/imageurl', (req,res)=>{


const app = new Clarifai.App({
 apiKey: 'f20b70f343744109b5166f78f51c9cd9'
});
app.models
.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
.then(response=>res.json(response))
.catch(err => res.status(400).json('unable to work with API'));
})





app.listen(3002);


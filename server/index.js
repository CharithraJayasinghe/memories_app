import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb" , extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true }))
app.use(cors());

mongoose.connect('mongodb+srv://Charithra:charithra98@cluster0.rt5htvp.mongodb.net/test1?retryWrites=true&w=majority', ()=>{
  console.log('database connection established');
})

/*const CONNECTION_URL = 'mongodb+srv://Charithra:charithra98@cluster0.rt5htvp.mongodb.net/?retryWrites=true&w=majority'
/*const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true});
 /* .then(() => app.listen(PORT, console.log('Server running on port: ${PORT}')))
  .catch((error) => console.log(error.massage));*/

 /*mongoose.set('useFindAndModify', false); 

 app.get('/', (req, res) => {
  res.send('hello world')
 }
 )
*/
app.listen(5000,(console.log('Server running on port: 5000')))

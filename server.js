const app = require("./app")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const db_url = process.env.DATA_BASE_URL
// console.log(db_url);
mongoose.connect(db_url)
.then(()=>{
    console.log(`Database Connected Successfully`);
    
}).catch(err=>{
    console.log(`Database Error: ${err}`);
    
})


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}...`);
    
})
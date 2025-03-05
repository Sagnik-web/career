const app = require("./app")
const mongoose = require('mongoose')



const db_url = process.env.DATA_BASE_URL
mongoose.connect(db_url).then(()=>{
    console.log(`Database Connected Successfully`);
    
}).catch(err=>{
    console.log(`Database Error: ${err}`);
    
})


const port = process.env.PORT 

app.listen(port,()=>{
    console.log(`Server is runing on port ${port}...`);
    
})
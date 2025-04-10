require('dotenv').config();
const app = require('./src/App');




app.listen(3000,()=>{    /// start server on port 3000
    console.log("server is running on port 3000");
})

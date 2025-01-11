import { connectDb } from "./config/connectDb.js";
import { app } from "./app.js";
import { config } from "./config/config.js";
const start = async() =>{
    try {
        await connectDb()
    } catch (error) {
        console.error("error in start server", error);
    }
    app.listen(config.PORT ,()=>{
        console.log(`sever running on http://localhost:${config.PORT}`);
    })
}
start()
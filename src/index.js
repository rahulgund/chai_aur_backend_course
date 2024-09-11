// require("dotenv").config({ path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then( ()=> {
        app.listen(process.env.PORT || 8000, ()=> {
            console.log(`Server is running at port ${process.env.PORT}`);
            
        } )
    })
        .catch((error)=>{
            console.log("Mongo DB connection failed", error);
            
        })



















 /*   <--- IFEE Code example for database conection --->
 (
    async () => {
        try {

            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            app.on("error", (error) => {
                console.log("Error", error);
                throw error
                
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is listening on ${process.env.PORT}`);
                
            })
            
            
        } catch (error) {

            console.error("ERROR" , error);
            throw error;
            
            
        }
    }
 )()
*/

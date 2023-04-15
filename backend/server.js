import mongoose from "mongoose";

const connection = async () => {
     mongoose.connect(process.env.DB_URL, {
          dbName: "portfolio",
          useNewUrlParser: true,
          useUnifiedTopology: true
     }).then(() => {
          console.log("Connected to MongoDB");
     }).catch((err) => {
          console.log(`DB connection error: ${err}`);
          // process.exit(1);
     });
};

export default connection;
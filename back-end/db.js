const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.MONGODB_URL || "";
// const connection = async () => {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect(uri)
//         console.log(`Connected database successfully!`);
//     } catch(err) {
//         console.warn(`backend/db.js`, err);
//     }
// }
const connectDB = async () => {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(conn.connection.host);
};
module.exports = connectDB
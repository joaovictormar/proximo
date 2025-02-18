import mongoose from "mongoose";

const conectaNaDatabase = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectaNaDatabase;
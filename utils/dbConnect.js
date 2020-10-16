import mongoose from 'mongoose';
import { noteSeeds } from '../noteSeed.js'

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    noteSeeds()
    /*db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to database'))*/

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;
import mongoose from 'mongoose';
/*import { noteSeeds } from '../seeder.js'
import { CategorySeeds } from '../seeder.js'
import { ConditionSeeds } from '../seeder.js'
import { ItemSeeds } from '../seeder.js'
import { LocationSeeds } from '../seeder.js'
import { RoomSeeds } from '../seeder.js'
import { SCategorySeeds } from '../seeder.js'*/

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    //noteSeeds(), CategorySeeds(), ConditionSeeds(), ItemSeeds(), LocationSeeds(), RoomSeeds(), SCategorySeeds()
    
    /*db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to database'))*/

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;
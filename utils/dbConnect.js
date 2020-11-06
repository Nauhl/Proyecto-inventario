import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb+srv://Oneslot9:3mglyOggIQlTHqsB@cluster0.ej2xz.mongodb.net/Inventario?retryWrites=true&w=majority",/*process.env.MONGO_URI*/ {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  /*db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to database'))*/

  
  connection.isConnected = db.connections[0].readyState;
  
  switch (connection.isConnected) {
    case 1:
    console.log("IsConnected", connection.isConnected);
    break;
    case 2:
    console.log("IsConnected", connection.isConnected);
    break;
    case 3:
    console.log("IsConnected", connection.isConnected);
    break;
    case 4:
    console.log("IsConnected", connection.isConnected);
    break;

    default:
  break;
  }
}

  async function dbDisconnect() {
    mongoose.connection.close();
  }

  export {
    dbConnect,
    dbDisconnect
  };
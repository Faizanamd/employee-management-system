
import { connectToMongoose } from './database/connecToMongoose.js';
import app from './index.js';

app.listen(3000, () => {
    console.log("Server is running at port 3000")
    connectToMongoose();
})
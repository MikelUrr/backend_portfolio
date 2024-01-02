
import mongodb from "./../config/mongodb.js";

import mongoose, { Schema } from "mongoose"; 

const onClickSchema = new Schema({
    time: {
        type: String,
    },
    clickedUrl: {
        type: String,
    },
    userinfo: {
        type: Schema.Types.Mixed,
    },
    componentInfo: {
        type: String,
    }
});

const onClickModel = mongoose.model('onclick', onClickSchema);

export default onClickModel;
import {Schema} from 'mongoose';

const postagensSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

export default postagensSchema;
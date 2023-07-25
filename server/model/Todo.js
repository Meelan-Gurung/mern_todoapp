import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  timeStamp : {
    type: Date,
    default: Date.now
  }
});

const todo = mongoose.model('todo', TodoSchema);

export default todo;

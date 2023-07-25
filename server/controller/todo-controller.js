import Todo from "../model/Todo.js";

export const addtodos = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      timeStamp: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const gettodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ timeStamp: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id},
      { done: !todoRef.done }
    )
    
    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
      await Todo.findOneAndUpdate(
      { _id: req.params.id},
      { data: req.body.data }
    )
    const todo = await Todo.findById(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
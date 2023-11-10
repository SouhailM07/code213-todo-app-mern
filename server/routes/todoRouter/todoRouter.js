const path = require("path");
const router = require("express").Router();

const Todo = require(path.join(
  __dirname,
  "..",
  "..",
  "models",
  "todoModel",
  "todoModel.js"
));

/*=======================================================================================*/
// r_todo
/*=======================================================================================*/

router.get("/", async (req, res) => {
  let todoLists = await Todo.find({});
  res.status(201).json({ length: todoLists.length, data: todoLists });
});

/*=======================================================================================*/
// c_todo
/*=======================================================================================*/

router.post("/addTodo/", async (req, res) => {
  try {
    let newTodo = new Todo();
    let note = req.body.note;
    if (!note) res.status(400).send(`fill in the todo ${note}`);
    else {
      newTodo.text = note;
      newTodo.done = false;
      await newTodo.save();
      res.status(201).send(`new todo was added successfully => 
      ${note}`);
    }
  } catch (error) {
    res.status(500).send(err);
  }
});

/*=======================================================================================*/
// u_todo
/*=======================================================================================*/

router.put("/doneTodo/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let updatedTodo = await Todo.findById(id);
    updatedTodo.done = !updatedTodo.done;
    await updatedTodo.save();
    res.status(201).send("todo done state was updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

/*=======================================================================================*/
// d_todo
/*=======================================================================================*/

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) res.status(404).send("todo not found !");
    else {
      res.status(201).send("the todo was deleted successfully");
    }
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

module.exports = router;

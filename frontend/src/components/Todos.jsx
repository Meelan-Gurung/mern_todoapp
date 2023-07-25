import { useEffect } from "react";

import { deleteTodo, getAllTodos } from "../redux/actions/index.js";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type.js";

import { useDispatch, useSelector } from "react-redux";

import Todo from "./Todo.jsx";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const deleteDone = () => {
    todos.forEach(({done, _id}) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  }

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
        {
          todos.some(todo => todo.done) ? (
            <button onClick={deleteDone} className="button clear">Delete Done</button>
          ) : null     
        }
      </div>
      <ul>
        {
          getTodos().map(todo => {
          return <Todo key={todo._id} todo={todo} />;
        })}
      </ul>
    </article>
  );
};

export default Todos;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../features/tasks/tasksSlice';

const TaskItem = ({ task, onMove }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState(task.todo);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ ...task, todo }));  // Sync edit with API
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));  // Delete task
  };

  return (
    <div className="task-item bg-white shadow p-4 mb-4 rounded-lg border">
      {isEditing ? (
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border p-2 w-full"
        />
      ) : (
        <h3 className={`text-lg ${task.status === 'Done' ? 'line-through text-green-500' : ''}`}>
          {task.todo}
        </h3>
      )}

      <div className="actions mt-2 flex flex-wrap gap-2">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          onClick={handleEdit}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition w-full sm:w-auto"
          onClick={() => onMove(task.id, 'To Do')}
        >
          To Do
        </button>
        <button
          className="bg-yellow-300 p-2 rounded hover:bg-yellow-400 transition w-full sm:w-auto"
          onClick={() => onMove(task.id, 'In Progress')}
        >
          In Progress
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition w-full sm:w-auto"
          onClick={() => onMove(task.id, 'Done')}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

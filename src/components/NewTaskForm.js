import React, { useState } from 'react';

const NewTaskForm = ({ onAdd }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      onAdd({ todo });
      setTodo(''); // Clear input field after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form mb-6 w-full max-w-lg mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 p-2 rounded w-full md:w-3/4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full md:w-1/4 md:ml-2 hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;

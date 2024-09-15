import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`https://dummyjson.com/todos/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  if (!task) return <div className="p-4 max-w-lg mx-auto">Loading...</div>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
      <p className="mb-2">{task.description}</p>
      <p className="text-lg">
        Status: <span className={task.completed ? 'text-green-600' : 'text-red-600'}>
          {task.completed ? 'Done' : 'To Do'}
        </span>
      </p>
    </div>
  );
};

export default TaskDetails;

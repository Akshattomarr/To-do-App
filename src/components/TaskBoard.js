import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, editTask, deleteTask, moveTask } from '../features/tasks/tasksSlice';
import TaskItem from './TaskItem';
import NewTaskForm from './NewTaskForm';

const TaskBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks()); // Fetch tasks when component mounts
  }, [dispatch]);

  const filterTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleMoveTask = (id, newStatus) => {
    dispatch(moveTask({ id, newStatus })); // Move tasks locally first
    const task = tasks.find(task => task.id === id);
    dispatch(editTask({ ...task, status: newStatus })); // Sync with API
  };

  return (
    <div className="task-board p-4 md:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management</h1>
      <NewTaskForm onAdd={(newTask) => dispatch(addTask(newTask))} />

      <div className="task-columns grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="column bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">To Do</h2>
          {filterTasksByStatus('To Do').map((task) => (
            <TaskItem key={task.id} task={task} onMove={handleMoveTask} />
          ))}
        </div>

        <div className="column bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">In Progress</h2>
          {filterTasksByStatus('In Progress').map((task) => (
            <TaskItem key={task.id} task={task} onMove={handleMoveTask} />
          ))}
        </div>

        <div className="column bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Done</h2>
          {filterTasksByStatus('Done').map((task) => (
            <TaskItem key={task.id} task={task} onMove={handleMoveTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;

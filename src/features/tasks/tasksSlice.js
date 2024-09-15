import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dummy JSON API endpoint for tasks
const API_URL = 'https://dummyjson.com/todos';

// Async thunks for API interactions

// Fetch tasks from the API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(`${API_URL}?limit=10`);
  // Map API response to local format
  return response.data.todos.map(task => ({
    ...task,
    status: task.completed ? 'Done' : 'To Do',
  }));
});

// Add a new task to the API and local state
export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post(`${API_URL}/add`, {
    todo: task.todo,
    completed: false,  // New tasks start in "To Do" state
    userId: task.userId || 1,
  });
  return { ...response.data, status: 'To Do' };
});

// Edit a task locally and sync it with the API
export const editTask = createAsyncThunk('tasks/editTask', async (task) => {
  const response = await axios.put(`${API_URL}/${task.id}`, {
    todo: task.todo,
    completed: task.status === 'Done', // Sync completed state with "Done" status
  });
  return { ...response.data, status: task.status };
});

// Delete a task in the API and remove from local state
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice to manage tasks locally
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    moveTask: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = newStatus;  // Move task between statuses locally
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

// Export actions and reducer
export const { moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;

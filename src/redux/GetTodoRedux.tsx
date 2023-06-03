import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Task {
  id: number;
  content: string;
  completed: boolean
  // tambahkan properti tugas lainnya sesuai dengan respons API
}

interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://api.todoist.com/rest/v2/tasks', {
    headers: {
      Authorization: 'Bearer 431cb76f650541058f235490f5fb4731ec1d32b9',
    },
  });
  const data = await response.json();
  return data as Task[];
});

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default tasksSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './src/redux/GetTodoRedux';
import { IdTaskSlice } from './src/redux/GetIdTask';

const store = configureStore({
  reducer: {
    idTask: IdTaskSlice.reducer,
    tasks: tasksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

import { Provider } from 'react-redux';
import store from '../store';

import Input from "./component/Input";
import Layout from "./pages/Layout";
import TaskList from "./component/TaskList";


function App() {
  return (
    <div data-theme="dark">
      <Provider store={store}>

        <Layout>
          <Input />
          {/* <NewTaskForm/> */}
          <TaskList />

        </Layout>
      </Provider>

    </div>
  );
}

export default App;

import Card from "./component/LabelTask";
import Input from "./component/Input";
import Layout from "./pages/Layout";
import LabelTask from "./component/LabelTask";

function App() {
  return (
    <div data-theme="dark">
      <Layout>
        <Input/>
        <LabelTask/>
      </Layout>
       
    </div>
  );
}

export default App;

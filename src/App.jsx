import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import TodoPage from "./pages/TodoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/v1/" element={<TodoPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

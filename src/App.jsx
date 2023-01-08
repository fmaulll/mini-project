import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Routes>
            <Route path="/" element={<TodoPage />} />
          </Routes>
        </Layout>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;

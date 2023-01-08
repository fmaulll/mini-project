import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import TodoPage from "./pages/TodoPage";

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/*">
              <Route index path="v1" element={<TodoPage />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;

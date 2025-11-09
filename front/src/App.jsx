import MainLayout from "./Layout/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Page1 from "./pages/page1.tsx";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Page1 />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App

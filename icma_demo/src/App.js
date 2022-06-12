import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Index, Error} from './pages/index';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'*'} element={<Error code={404}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

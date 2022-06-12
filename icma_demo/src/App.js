import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Index, Error} from './pages/index';
import {Layout} from './components/index';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Index/>}/>
                </Route>
                <Route path={'*'} element={<Error code={404}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

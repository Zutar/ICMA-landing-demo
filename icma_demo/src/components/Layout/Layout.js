import style from './Layout.module.css';
import {Link, Outlet} from 'react-router-dom';
import {Header, Footer} from "../index";


function Layout(){
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;

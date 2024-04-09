import { Outlet } from 'react-router-dom';
import Footer from './Footer.js';

const Layout = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
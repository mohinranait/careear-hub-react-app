
import { Outlet } from 'react-router-dom';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

const MainLayout = () => {
    return (
        <>  
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
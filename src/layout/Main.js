import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer';
import Header from '../Pages/Home/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
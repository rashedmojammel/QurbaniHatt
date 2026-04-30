import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

        </>
       

    );
};

export default layout;
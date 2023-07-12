import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/main';
import Repository from './pages/Repository/repository';

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}/>
                <Route path='/repository/:repository' element={<Repository />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesConfig;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/main';
import Repository from './pages/Repository';

export default Routes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}/>
                <Route path='/repository' element={<Repository />}/>
            </Routes>
        </BrowserRouter>
    );
}
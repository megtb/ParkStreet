import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Therapists from './Therapists';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/therapists' element={<Therapists />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;
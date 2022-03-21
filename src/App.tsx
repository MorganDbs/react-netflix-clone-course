/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import HomePage from './HomePage';
import Serie from './Serie';
import Movie from './Movie';
import MyList from './MyList';
import WhoIsWatching from './WhoIsWatching';
import AddProfile from './AddProfile';
import ManageSelect from './ManageSelect';
import Manage from './Manage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WhoIsWatching />}>
                </Route>
                <Route path="/newprofile" element={<AddProfile />}>
                </Route>
                <Route path="/manageselection" element={<ManageSelect />}>
                </Route>
                <Route path="/manage" element={<Manage />}>
                </Route>
                <Route path="/home" element={<HomePage />}>
                </Route>
                <Route path="/film" element={<Movie />}>
                </Route>
                <Route path="/serie" element={<Serie />}>      
                </Route>
                <Route path="/nouveautes" element={<HomePage />}>      
                </Route>
                <Route path="/liste" element={<MyList />}>      
                </Route>
                <Route path="/direct" element={<HomePage />}>      
                </Route>
                <Route path="/jeunesse" element={<HomePage />}>      
                </Route>
            </Routes>
        </Router>
    );
}

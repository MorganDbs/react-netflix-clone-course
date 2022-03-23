/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import HomePage from './Pages/HomePage';
import Serie from './Pages/Serie';
import Movie from './Pages/Movie';
import MyList from './Pages/MyList';
import WhoIsWatching from './Pages/WhoIsWatching';
import AddProfile from './Pages/AddProfile';
import ManageSelect from './Pages/ManageSelect';
import Manage from './Pages/Manage';
import SignIn from './Pages/SignIn';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />}>
                </Route>
                <Route path="/wiw" element={<WhoIsWatching />}>
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
                <Route path="/liste" element={<MyList />}>      
                </Route>
            </Routes>
        </Router>
    );
}

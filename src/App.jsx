// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Overview from './Overview';
import BlogPost from './BlogPost';
import NewPost from './NewPost';
import Layout from "./Layout.jsx";
import BlogDetails from "./BlogDetails.jsx";

function App() {
    return (
        <Router>
           <Routes>
               <Route element={<Layout />}>
                   <Route path="/" element={<Home/>}  />
                   <Route path="/overview" element={<Overview/>} />
                   <Route path="/blog/:id" element={<BlogDetails />} />
                   <Route path="/new-post" element={<NewPost/>} />
               </Route>
           </Routes>
        </Router>
    );
}

export default App;

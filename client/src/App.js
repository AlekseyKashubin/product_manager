import React from 'react';
import './Product.css'
import Dashboard from './views/Dashboard';
import NewProduct from './views/New';
import Edit from './views/Edit';
import One from './views/One';
import { Routes, Route, Link } from 'react-router-dom';





function App() {
    return (


        <div className="App">
            <div className='navBar'>
                <h1 className='pageTitle'>Product Manager</h1>
                <Link className='navLink' to='/'>Dashboard</Link>| |
                <Link className='navLink' to='/new'> Add a Product</Link>
                
            </div>

            <Routes>
                <Route path='/' element={<Dashboard />} ></Route>
                <Route path='/new' element={<NewProduct />}></Route>
                <Route path='/one/:id' element={<One />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>

            </Routes>

        </div>
    );
}
export default App;


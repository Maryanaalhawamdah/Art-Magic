import { useState } from 'react'
import './App.css'
import React, { useRef } from 'react';
import Header from './admin/src/comp/Headeer'
import Sidebar from './admin/src/comp/Sidebar'
import Home from './admin/src/comp/Home'
import Products from './admin/src/comp/Product/get';
import Categories from './admin/src/comp/Category/get'
import Users from './admin/src/comp/Users/get';
import DeleteUser from './admin/src/comp/Users/delete'
import EditUser from './admin/src/comp/Users/edit'
import Add from './admin/src/comp/Users/add'
import EditProduct from './admin/src/comp/Product/edit'
import DeleteProduct from './admin/src/comp/Product/delete'
import AddProduct from './admin/src/comp/Product/add'
import Admins from './admin/src/comp/admin/get';
import AdminEdit from './admin/src/comp/admin/edit';
import AdminAdd from './admin/src/comp/admin/add';
import AdminDelete from './admin/src/comp/admin/delete';
import EditCategorie from './admin/src/comp/Category/edit'
import DeleteCategorie from './admin/src/comp/Category/delete'
import AddCategorie from './admin/src/comp/Category/add'
import Orders from './admin/src/comp/orders/get'


import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <BrowserRouter>
        <Routes>
          <Route index element= {<Home/>} />
          <Route path='/categories' element= {<Categories/>} />
          <Route  path='/products' element= {<Products/>} />
          <Route path='/users' element= {<Users/>} />
          <Route path='/delete/:id' element= {<DeleteUser/>} />
          <Route path='/edit/:id' element= {<EditUser/>} />
          <Route path='/add' element= {<Add/>} />
          <Route path='/edit/product/:id' element= {<EditProduct/>} />
          <Route path='/delete/product/:id' element= {<DeleteProduct/>} />
          <Route path='/addProdcut' element= {<AddProduct/>} />
          <Route path='/admins' element= {<Admins/>} />
          <Route path='/edit/admin/:id' element= {<AdminEdit/>} />
          <Route path='/add/admin' element= {<AdminAdd/>} />
          <Route path='/delete/admin/:id' element= {<AdminDelete/>} />
          <Route path='/edit/category/:id' element= {<EditCategorie/>} />
          <Route path='/delete/category/:id' element= {<DeleteCategorie/>} />
          <Route path='/add/category' element= {<AddCategorie/>} />
          <Route path='/admin/orders' element= {<Orders/>} />


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App

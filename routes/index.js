import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home' ;//importando a pagina home

import Register from '../Pages/Register';

import Admin from '../Pages/Admin';

import Private from './Private'

function RoutesApp (){ // função que atraves dous route vao criando paginas atraves do path
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={ <Register/> } />
            
            <Route path='/admin' element={ <Private> <Admin/> </Private> } />
        </Routes>
    )
}

export default RoutesApp;
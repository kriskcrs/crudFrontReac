import logo from './logo.svg';
import './App.css';

//importar componentes


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowBlogs from './blog/ShowBlogs.js';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';





function App() {

  console.log("ingreso al app funcion")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>prueba</h1>
       
        <BrowserRouter>
        <Routes>
          <Route path='/'  element={<CompShowBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={<CompEditBlog/>}/>
        </Routes>
        </BrowserRouter>
        
        
    </div>
  );
}

export default App;

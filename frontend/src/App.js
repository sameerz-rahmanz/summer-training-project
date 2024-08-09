import React from 'react';
import {Route,Routes} from "react-router-dom";
import Header from './components/Header';
import Admin from './components/Admin/Admin';
import Author from './components/Author/Author';
import HomePage from './components/HomePage';
import Movies from './components/Movies/Movies';


 function App() {
  return (
    <div>
      <Header/>
      {/*Home Page */}
      <section>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/author' element={<Author/>}/>

        </Routes>
      </section>
     
    </div>
  )
}

export default App;

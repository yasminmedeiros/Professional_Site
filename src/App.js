import './App.css';
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slideshow/Slider.js'
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/Home';
import Analise from './Components/Pages/Analise/Analise';
import Eventos from './Components/Pages/Eventos/Eventos';
import Formacao from './Components/Pages/Formacao/Formacao';
import Patentes from './Components/Pages/Patentes/Patentes';
import Profissional from './Components/Pages/Profissional/Profissional';
import Projetos from './Components/Pages/Projetos/Projetos';
import Footer from './Components/Footer/Footer';







import './styles.css'
import { FaHome } from 'react-icons/fa';
function App() {

  /*const[articles,setArticles] = useState(0)
  
  useEffect(() => {
    fetch("https://api-yasmin.herokuapp.com/",{
      'methods':'GET',
      headers:{
        'Content-Type':'applications/json'
      }
    })
    .then(resp =>resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
    
  })
  //      <h2> Oi {articles.message}</h2>

*/
  
  return (
    <div className="App">
        <div>
        <Slider></Slider>
        </div>

        <div> 
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' exact element={<Home></Home>} />
              <Route path='/formacao' element={<Formacao></Formacao>} />
              <Route path='/experiencias-profissionais' element={<Profissional></Profissional>}/>
              <Route path='/projetos' element={<Projetos></Projetos>} />
              <Route path='/eventos' element={<Eventos></Eventos>} />
              <Route path='/patentes' element={<Patentes></Patentes>} />
              <Route path='/analise-em-tempo-real' element={<Analise></Analise>} />
            </Routes>
          </Router>
        </div>
        <div><Footer></Footer></div>
    </div>
    
  );
}

export default App;

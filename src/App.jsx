import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './views/Home';
import Favoritos from './views/Favoritos';
import { useEffect, useState } from 'react';

export default function App() {
  const url = './src/fotos.json';
  const [photos, setPhotos] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPhotos([data.photos]);
    } catch (error) {
      alert(
        'Se ha producido un error al recuperar los datos => ' +
          error.name +
          ': ' +
          error.message
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

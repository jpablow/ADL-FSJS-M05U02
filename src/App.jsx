import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import { useState } from 'react';
import ElContexto from './ElContexto';
import endpoint from './fotos.json';

export default function App() {
  const [photos, setPhotos] = useState(endpoint.photos);
  const [favs, setFavs] = useState([]);

  const toggleFav = (i) => {
    const pIdx = photos.findIndex((photo) => photo.id === i);
    photos[pIdx].liked = !photos[pIdx].liked;
    setPhotos([...photos]);
    setFavs([]);
    const favArr = photos.filter((photo) => photo.liked === true);
    setFavs([...favArr]);
  };

  const globalState = { photos, setPhotos, favs, setFavs, toggleFav };

  return (
    <div className="App">
      <ElContexto.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </ElContexto.Provider>
    </div>
  );
}

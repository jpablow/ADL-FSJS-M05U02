import Heart from '../components/Heart';
import ElContexto from '../ElContexto';
import { useContext } from 'react';

export default function Favoritos() {
  const { photos, fav, toggleFav } = useContext(ElContexto);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photos.map((p) => {
          return (
            <div
              key={p.id}
              className="foto"
              style={{ backgroundImage: `url(${p.src.medium})` }}
              onClick={() => toggleFav(p.id)}
            >
              <Heart filled={p.liked} />
              <p>{p.alt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

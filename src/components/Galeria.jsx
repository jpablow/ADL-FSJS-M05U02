import '../assets/css/galeria.css';
import Heart from './Heart';
import ElContexto from '../ElContexto';
import { useContext } from 'react';

export default function Home() {
  const { photos } = useContext(ElContexto);

  return (
    <div className="galeria grid-columns-4 p-3">
      {photos.map((p) => {
        return (
          <div
            key={p.id}
            className="foto"
            style={{ backgroundImage: `url(${p.src.medium})` }}
          >
            <Heart filled={p.liked} />
            <p>{p.alt}</p>
          </div>
        );
      })}
    </div>
  );
}

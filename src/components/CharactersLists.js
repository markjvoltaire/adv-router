import { Link } from 'react-router-dom';

export default function CharactersLists({ characters }) {
  return (
    <div className="characterList">
      {characters.map((character) => (
        <div key={character.id}>
          <br />
          <br />
          <Link to={`characters/${character.char_id}`}>
            <h4>{character.name}</h4>
            <img className="characters" src={character.img} />
            <br />
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
}

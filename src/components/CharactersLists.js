import { Link } from 'react-router-dom';

export default function CharactersLists({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <div className="characterList" key={character.id}>
          <br />
          <br />
          <Link to={`characters/${character.char_id}`}>
            <h1>{character.name}</h1>
            <p> Nickname: {character.nickname}</p>
            <p>Status: {character.status}</p>
            <img className="characters" src={character.img} />
            <br />
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
}

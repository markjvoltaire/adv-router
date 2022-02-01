export default function CharactersLists({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <br />
          <br />
          <h1>{character.name}</h1>
          <p> nickname: {character.nickname}</p>
          <p>Status: {character.status}</p>
          <img className="characters" src={character.img} />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

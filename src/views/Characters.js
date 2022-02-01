import React, { useEffect, useState } from 'react';
import CharactersLists from '../components/CharactersLists';
import { fetchCharacters } from '../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetchCharacters();
      setCharacters(response);
      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) {
    return <h1>Please Wait</h1>;
  }

  return (
    <div>
      <CharactersLists characters={characters} />
    </div>
  );
}

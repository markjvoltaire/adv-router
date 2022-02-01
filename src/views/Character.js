import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import { findCharacter } from '../services/characters';

export default function Character() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await findCharacter(params.id);
      console.log(data);
      setCharacter(data);
      setLoading(false);
      console.log(character);
    };
    fetchData();
  }, [character, params.id]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <CharacterDetail character={character} />
    </div>
  );
}

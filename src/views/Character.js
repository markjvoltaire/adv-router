import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import { findCharacter } from '../services/characters';

export default function Character() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await findCharacter(char_id);

      setCharacter(data);
      setLoading(false);
    };
    fetchData();
  }, [char_id]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/');
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  const { name } = character[0];
  const { nickname } = character[0];
  const { img } = character[0];

  return (
    <div>
      <button onClick={handleClick}>Go Home</button>
      <CharacterDetail name={name} nickname={nickname} img={img} />
    </div>
  );
}

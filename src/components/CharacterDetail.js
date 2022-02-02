import React from 'react';

export default function CharacterDetail({ name, nickname, img }) {

  return (
    <div>
      <h4>Character info</h4>
      <h1>Name: {name}</h1>
      <img className="picDetail" src={img} />
      <p>Nickname: {nickname}</p>
    </div>
  );
}

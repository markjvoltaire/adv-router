export async function fetchCharacters() {
  const resp = await fetch('https://www.breakingbadapi.com/api/characters');

  const data = await resp.json();

  return data;
}

export async function findCharacter(char_id) {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`);
  const data = await resp.json();

  return data;
}

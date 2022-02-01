export async function fetchCharacters() {
  const resp = await fetch('https://www.breakingbadapi.com/api/characters');
  const data = await resp.json();
  return data;
}

export async function findCharacter(id) {
  const resp = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
  const data = await resp.json();
  console.log(data);
  return data;
}

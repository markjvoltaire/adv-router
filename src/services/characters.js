export async function fetchCharacters() {
  const resp = await fetch('https://www.breakingbadapi.com/api/characters');
  const data = await resp.json();
  return data;
}

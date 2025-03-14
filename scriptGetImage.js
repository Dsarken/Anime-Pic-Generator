const portrait = document.getElementById("anime-portrait");
const characterName = document.getElementById("character-name");

async function getRandomAnimeCharacter() {
  try {
    const response = await fetch("https://api.jikan.moe/v4/random/characters");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const characterData = data.data;
    const name = characterData.name;
    const imageUrl = characterData.images.jpg.image_url;

    return { name, imageUrl };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function displayRandomCharacter() {
  const randomCharacter = await getRandomAnimeCharacter();
  if (randomCharacter) {
    portrait.src = randomCharacter.imageUrl;
    characterName.textContent = randomCharacter.name;
  }
}

displayRandomCharacter();

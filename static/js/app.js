import API from './api.js';
import Character from './character.js';

const api = new API();

async function initApp(initCharacterId) {
    const characterData = await api.getCharacter(initCharacterId)
    console.log(characterData);
    const rick = new Character(characterData)
}
initApp(4);
//console.log(api.getCharacter(2));
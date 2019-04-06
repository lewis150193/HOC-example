export const fetchNames = () => {
    return(
    fetch('https://rickandmortyapi.com/api/character')
        .then(character => character.json())
        .then(c =>  c.results )
    )};


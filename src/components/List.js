import { useEffect, useState } from "react";
import Character from "./Character";

function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCharacters = () => {
      fetch("https://rickandmortyapi.com/api/character").then((res) =>
        res.json().then((data) => {
          setCharacters(data.results);
          setLoading(false);
        })
      );
    };
    if (characters.length === 0) {
      fetchCharacters();
    }
  }, [characters]);

  //  useEffect(() => {
  //  async function fetchData() {
  //  const data = await fetch(
  // 'https://rickandmortyapi.com/api/character'
  //  const { results } = await data.json();
  //  setCharacters(results);
  //  }
  //  fetchData();
  //  }, [characters.length]);

  return (
    <div>
      <div className="row">
        {loading && <p>Loading...</p>}
        {characters.length > 0 &&
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
              origin={character.origin}
            />
          ))}
      </div>
    </div>
  );
}

export default List;

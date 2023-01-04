import { useEffect, useState } from "react";
import Character from "./Character";

function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchCharacters = (page) => {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
        (res) =>
          res.json().then((data) => {
            setCharacters(data.results);
            setPageInfo(data.info);
            setLoading(false);
          })
      );
    };

    fetchCharacters(page);
  }, [characters.length, page]);

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
        <h2>Characters</h2>
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

        {!loading && characters.length > 0 && (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {pageInfo.prev && (
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                    href
                  >
                    Previous
                  </a>
                </li>
              )}

              {pageInfo.next && (
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                    href
                  >
                    Next
                  </a>
                </li>
              )}
            </ul>
            <p>Total Pages: {pageInfo.pages}</p>
          </nav>
        )}
      </div>
    </div>
  );
}

export default List;

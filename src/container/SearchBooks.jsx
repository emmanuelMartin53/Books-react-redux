import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";

const SearchBooks = () => {
  const [title, setTitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchBooks(title));
  };

  const displayFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">

      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading</span>
      </div>
    </div>

  ) : state.error !== "" ? (
    <p>{state.error}</p>
  ) : (

    state.fetchedBooks.map((data) => {
      const info = data.volumeInfo || {};

      const thumbnail = info.imageLinks && info.imageLinks.thumbnail
          ? info.imageLinks.thumbnail
          : "https://via.placeholder.com/128x192?text=No+Image";

      return (
        <div className="card mb-2" key={data.id}>
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-bs-toggle="collapse"
                data-bs-target={`#${data.id}`}
                aria-expanded="false"
              >
                {info.title || "Titre inconnu"}
              </button>
            </h5>
          </div>

          <div id={data.id} className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
              <img
                src={thumbnail}
                alt={info.title || "No title"}
                style={{ width: "128px" }}
              />

              <h4 className="card-title">Titre : {info.title || "Titre inconnu"}</h4>

              <h5 className="card-title">
                Auteurs : {info.authors ? info.authors.join(", ") : "Inconnu"}
              </h5>

              <p className="card-text">
                {info.description || "Pas de description disponible"}
              </p>

              {info.previewLink && (
                <a
                  className="btn btn-outline-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={info.previewLink}
                >
                  Plus d'infos
                </a>
              )}

              <button className="btn btn-outline-secondary ms-3">Enregistrer</button>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <main role="main">
      <div className="bg-light py-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre à rechercher sur Google API</p>

          <form
            className="row g-3 justify-content-center mt-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Que recherchez-vous ?"
                required
              />
            </div>

            <div className="col-auto">
              <button className="btn btn-outline-secondary">Rechercher</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div id="accordion">{displayFetchedBooks}</div>
      </div>
    </main>
  );
};

export default SearchBooks;

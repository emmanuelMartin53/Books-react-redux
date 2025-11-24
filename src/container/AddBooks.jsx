import { useState } from "react";


const AddBooks = () => {

  const initialState = {
    title: "",
    author: ""
  }

  const [newData, setNewData] = useState(initialState)
  // console.log(newData)

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(newData)
  }

  return (
    <main role="main">
      <div className="bg-light py-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="row g-3 justify-content-center mt-4" onSubmit={handleSubmit}>

            <div className="col-auto">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                // onChange={(event) => setNewData(event.target.value)} // 1ere Méthode
                onChange={(event) => setNewData({...newData, title: event.target.value})} // 2eme Méthode
              />
            </div>

            <div className="col-auto">
              <input
                value={newData.author}
                type="text"
                className="form-control"
                placeholder="Auteur"
                required
                onChange={(event) => setNewData({...newData, author: event.target.value})} // 2eme Méthode
              />
            </div>

            <div className="col-auto">
              <button className="btn btn-outline-secondary">
                Ajouter un livre
              </button>
            </div>

          </form>
        </div>
      </div>
      <div className="container" style={{minHeight: "200px"}}>

          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                <li className="list-group-item list-group-item-light d-flex justify-content-between">
                      livres enregistrés ici
                </li>
              </ul>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger mt-4 mb-5">Effacer tous les livres</button>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;

import { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";


const AddBooks = ({libraryData, addBook}) => {

  const initialState = {
    title: "",
    author: ""
  }

  // console.log(libraryData)

  const [newData, setNewData] = useState(initialState)
  // console.log(newData)

  const handleSubmit = (event) => {
      event.preventDefault()
      // console.log(newData)
      addBook(newData)

      // vider le input
      setNewData(initialState)
  }

  const displayData = libraryData.length > 0 ?
  
    <FlipMove>
      {
        libraryData.map((data) => {
          return (
            <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
              <span><strong>Titre: </strong>{data.title}</span>
              <span><strong>Auteur: </strong>{data.author}</span>
              <span className="btn btn-danger">X</span>
            </li>
            )
        })
      }
      </FlipMove>
      : <p className="text-center">Aucune data à afficher</p>

  const deletAllBooksBtn = libraryData.length > 0 &&
         <div className="d-flex justify-content-center">
            <button className="btn btn-danger mt-4 mb-5">Effacer tous les livres</button>
        </div>


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
               {displayData}
              </ul>

               {deletAllBooksBtn}

            </div>
        </div>
      </div>
    </main>
  );
};

const addStateToProps = (state) => {
  return {
    libraryData: state.library.books
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param))
  }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks);

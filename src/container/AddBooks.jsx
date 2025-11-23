

const AddBooks = () => {
  return (
    <main role="main">
      <div className="bg-light py-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="row g-3 justify-content-center mt-4">

            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                required
              />
            </div>

            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Auteur"
                required
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
    </main>
  );
};

export default AddBooks;

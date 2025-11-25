


const SearchBooks = () => {
  return (
    <main role="main">
      <div className="bg-light py-5 mb-4">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre à rechercher sur Google API</p>

          <form className="row g-3 justify-content-center mt-4" >

            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Que recherchez-vous ?"
                required
              />
            </div>

            <div className="col-auto">
              <button className="btn btn-outline-secondary">
                Rechercher
              </button>
            </div>
          </form>

        </div>
      </div>

      <div className="container" style={{minHeight: "200px"}}>
        <div className="accordion">
          <div className="card mb-2">
              <div className="card-header">

              </div>
              <div className="collapse" data-parent="accordion">

                <div className="card-body">
                  {
                    /*
                      - Image
                      - Titre
                      - Auteur
                      - Description
                      - Btn plus d'infos
                      - Btn Enregistrer
                    */
                  }
                </div>

              </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default SearchBooks;

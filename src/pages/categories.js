//import CategoriesList from '../../components/lists/CategoriesList';
import React from 'react'

export default function CategoryPage() {

  /*  $('#staticBackdrop').on('shown.bs.modal', function () {
      $('#staticBackdrop').trigger('focus')
    })
  */
  //CategoriesList()

  return (
    <div>
      { /* Modal */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
        Launch static backdrop modal
    </button>

      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
        </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

      { /* Card */}
      <div className="card border-info mb-3" style="max-width: 18rem;">
        <div className="card-header">Header</div>
        <div className="card-body text-info">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
};


import styles from '../../../styles/Home.module.css';

export default function DeleteModalCategory(props) {
    const { allCategories, DeleteCategoryOnClick} = props

    //const elementType = "category";

    return allCategories & allCategories.length > 0 ? (
        <div className="modal fade" id="DeleteCategoryModal" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Delete Category</h2>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">

                        Are you sure you want to delete this Category?

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" >NO</button>
                        <button type="button" className="btn btn-success" onClick={() => DeleteCategoryOnClick(categories)} >YES</button>
                    </div>
                </div>
            </div>
        </div>
    )
    : (
        <>
        </>
    );
}
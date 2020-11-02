import styles from '../../styles/Home.module.css';

export default function ModalCondition(props) {
    const { handleChange, AddCondition, cancelAddCondition, EditCondition, editMode, borrar, allConditions } = props

    const elementType = "condition";

    return (
        <>
            <div className={styles.main}>
                <h2>Condition</h2>
                <br />
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newCondition" >New Condition</button>
            </div>

            { /* Modal Create */}

            <div className="modal fade" id="newCondition" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <label>Name</label>
                        <input

                            required
                            className="form-control"
                            type="text"
                            id="name-input"
                            name="condition"
                            variant="outlined"
                            placeholder="Insert new Condition"
                            onChange={handleChange("name")}
                        />
                        <br />

                        <label>Description</label>
                        <textarea
                            required
                            className="form-control"
                            type="text"
                            id="description-input"
                            name="description"
                            placeholder="Insert new description"
                            onChange={handleChange("description")}
                        />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => cancelAddCondition()}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={() => AddCondition()}><i className="fa fa-database"></i> Save</button>
                        </div>
                    </div>
                </div>
            </div>

            { /* Modal Edit */}
            <div className="modal fade" id="editCondition" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Condition</h5>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                        </button>
                        </div>
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            //id="name-input"
                            name="condition"
                            variant="outlined"
                            placeholder="Edit condition"
                            onChange={handleChange("name")} />
                        <br />

                        <label>Description</label>
                        <textarea
                            className="form-control"
                            type="text"
                            //id="description-input"
                            name="description"
                            placeholder="Edit description"
                            onChange={handleChange("description")} />
                        <br />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => handleclickEditCondition()}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={() => EditCondition()}><i className="fa fa-database">
                            </i> &nbsp; {editMode ? "Save" : `Add ${elementType}`} </button>
                        </div>
                    </div>
                </div>
            </div>


            { /* Modal Create */}

            <div className="modal fade" id="ConditionDelete" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Delete Category</h2>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">

                            Are you sure you want to delete this Condition?

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
                            <button type="button" className="btn btn-success" onClick={() => borrar()} >YES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

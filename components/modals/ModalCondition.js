import styles from '../../styles/Home.module.css';

export default function ModalCondition(props) {
    const { handleChange, AddCondition, cancelAddCondition } = props

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
        </>
    )
}
// import Modal from "react-bootstrap/Modal";

// export default function ConditionDelete(props) {

//     const { allConditionsState, openn, handleClose, DeleteConditionOnClick } = props
    
//     return allConditionsState && allConditionsState.length > 0 ? (
//         <Modal show={openn} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Be Careful
//         </Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body>
//                     ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
//         </Modal.Body>

//                 <Modal.Footer>
//                     <tbody>
//                         {/* {allConditionsState.(condition => (  
//                         <tr key={condition._id}>  */}

                        
//                             <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
//                                 Cancel
//                                 </button> 

//                             <button type="button" className="btn btn-danger" onClick={() => DeleteConditionOnClick(condition._id)}>
//                                 <i className="fa fa-database"></i> &nbsp; Delete</button>
                        
                        
//                     {/* ))}    */}
//                     </tbody>
//                 </Modal.Footer>
//             </Modal>
//     ) : (
//         <>
//         </>
//     );
// }
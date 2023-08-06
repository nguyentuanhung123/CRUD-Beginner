import React from "react";
import "./Modal.css"

const Modal = ({ closeModal }) => {
    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") {
                closeModal();
            }
        }}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="page">Page</label>
                        <input type="page" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea type="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select name="status">
                            <option value="live">Live</option>
                            <option value="draft">Draft</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
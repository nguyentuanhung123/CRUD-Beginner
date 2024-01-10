import React, { useState } from "react";
import "./Modal.css"

const ModalConfirm = ({ closeDialog, title, closeAllModal }) => {
    return (
        <div className="modal-confirm" onClick={(e) => {
            if (e.target.className === "modal-confirm") {
                closeDialog();
            }
        }}>
            <div className="modal">
                <h1 className="">{title}</h1>
                <div className="buttons">
                    <button onClick={closeAllModal}>Reload</button>
                    <button onClick={closeDialog}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm;
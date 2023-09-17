import React, { useState } from "react";
import "./Modal.css"

const Modal = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(
        defaultValue ||
        {
            page: "",
            description: "",
            status: "live"
        }
    );

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.page && formState.description && formState.status) {
            return true;
        }
        else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));//mỗi key lỗi sẽ đc ngăn cách nhau bới dấu phấy
            return false;
        }
    }

    // console.log("Error : ", errors);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    }

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
                        <input type="text" name="page" value={formState.page} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" value={formState.description} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select name="status" value={formState.status} onChange={(e) => handleChange(e)}>
                            <option value="live">Live</option>
                            <option value="draft">Draft</option>
                            <option value="error">Error</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Please inclue : ${errors}`}</div>}
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
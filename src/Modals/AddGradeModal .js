import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import scc from "../assets/success.png";
import { addGrade } from "../api/personel";

const AddGradeModal   = (props) => {
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    let result = await addGrade(values);
    if (!result.ok) {
      console.log("Server Error");
      return;
    }
    setSuccess(true);
  };

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={() => {
        props.close();
        setSuccess(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {success ? <h2>Grade Ajouté</h2> : <h2>Ajouter Grade</h2>}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forme-group form-fields">
              <label htmlFor="label">Grade:</label>
              <input
                className="form-control"
                name="label"
                placeholder="Grade"
                type="text"
                {...register("label", { required: true })}
              />
            </div>

            <p></p>
            <div className="button-form">
              <button type="submit" className="btn btn-success add-btn">
                Save
              </button>
            </div>
            {Object.keys(errors).length != 0 && (
              <p className="text-danger">{"Formulaire Invalide"}</p>
            )}
          </form>
        )}
        {success && (
          <div className="success-vector">
            <img src={scc} alt="" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.close();
            setSuccess(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddGradeModal  ;

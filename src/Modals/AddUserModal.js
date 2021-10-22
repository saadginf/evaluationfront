import React, { useState , useEffect} from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addPerson, addPersonFields } from "../api/personel";
import scc from "../assets/success.png";

const AddUserModal = (props) => {
  const [fields, setfields] = useState(null)
  const getFields = async()=>{
      let result = await addPersonFields()
      if (!result.ok) {
        console.log("server Error")
 
        return
      }
      setfields(result.data)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (values) => {
   
    let user = {
      nom: values.nom,
      prenom: values.prenom,
      grade:{
        id: values.grade
      },
      organe: {
        id: values.organe
      },
      fonctions:{
        id: values.fonctions
      },
      fonction:values.fonction,
      mail:values.mail,
      tel:values.tel
    }
    let result = await addPerson(user);
    if (!result.ok) {
      console.log("Server Error");
      return;
    }
    setSuccess(true);
  };
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getFields()
    
  }, [])
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
          {success ? <h2>Personnel Ajouté</h2> : <h2>Ajouter Personnel</h2>}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forme-group form-fields">
              <label htmlFor="nom">Nom:</label>
              <input
                className="form-control"
                name="nom"
                placeholder="Nom"
                type="text"
                {...register("nom", { required: true })}
              />
            </div>
            
            <br/>
            <div className="forme-group form-fields">
              <label htmlFor="prenom">Prénom:</label>
              <input
                className="form-control"
                name="prenom"
                placeholder="Prénom"
                type="text"
                {...register("prenom", { required: true })}
              />
            </div>
            <br/>
            <div className="forme-group form-fields">
              <label htmlFor="mail">E-mail:</label>
              <input
                className="form-control"
                name="mail"
                placeholder="E-mail"
                type="text"
                {...register("mail", { required: true })}
              />
            </div>
            <br/>
            <div className="forme-group form-fields">
              <label htmlFor="tel">Tel:</label>
              <input
                className="form-control"
                name="tel"
                placeholder="Tel"
                type="text"
                {...register("tel", { required: true })}
              />
            </div>
            <br/>
            <div className="forme-group form-fields">
            <label htmlFor="grade">Grade:</label>
            <select
            {...register("grade", { required: true })}
            className="form-control"
          >
                <option value="" disabled selected>----Grade----</option>

            {fields ? fields.grades.map(o => <option value={o.value}>{o.label}</option>):null}
           
          </select>
            </div>
            <br/>
            <div className="forme-group form-fields">
              <label htmlFor="fonction">Fonction au sein de l'organe:</label>
              <input
                className="form-control"
                name="fonction"
                placeholder="Fonction au sein de l'organe"
                type="text"
                {...register("fonction", { required: true })}
              />
            </div>
            <br/>
            <div className="forme-group form-fields">
            <label htmlFor="fonctions">Fonction:</label>
            <select
            {...register("fonctions", { required: true })}
            className="form-control"
          >
            <option value="" disabled selected>----Fonction----</option>
            {fields ? fields.fonctions.map(o => <option value={o.value}>{o.label}</option>):null}
          </select>
            </div>
            <br/>
            <div className="forme-group form-fields">
            <label htmlFor="organe">Organe:</label>
            <select
            {...register("organe", { required: true })}
            className="form-control"
          >
            <option value="" disabled selected>----Organe----</option>
          {fields ? fields.organes.map(o => <option value={o.value}>{o.label}</option>):null}
          </select>
            </div>
            <p></p>
            <div className="button-form">
              <button type="submit" className="btn btn-success add-btn">
                Save
              </button>
            </div>
            {Object.keys(errors).length != 0 && (
              <p className="text-danger">{"Invalid Inputs"}</p>
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
            setSuccess(false)
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;

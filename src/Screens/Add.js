import React, {useState, useEffect} from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { addEva, addEvaFields } from "../api/eva";
const Add = () => {
  const [fields, setfields] = useState(null)
  const getFields = async()=>{
      let result = await addEvaFields()
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
  const submit =async(values) => {
    const result = await addEva(values, values.file[0]);
    if (!result.ok) {
      console.log("Erreur Serveur");

      return;
    }
    alert("Ajouter avec Succès");
    window.location.reload();
  };
  useEffect(() => {
    getFields()
    
  }, [])
  return (
    <div className="add-container">
      <form id="adding-form" className="form" onSubmit={handleSubmit(submit)}>
      <div className="form-group">
          <label className="text-info">Evaluateur</label>
          <br />
          <select
            {...register("evaluateurID", { required: true })}
            className="form-control"
          >
            <option value="" disabled selected>----Personnel----</option>
                       {fields ? fields.personnel.map(o => <option value={o.value}>{o.label}</option>):null}

          </select>
        </div>
      <div className="form-group">
          <label className="text-info">Organe</label>
          <br />
          <select
            {...register("organeID", { required: true })}
            className="form-control"
          > <option value="" disabled selected>----Organe----</option>
                       {fields ? fields.organes.map(o => <option value={o.value}>{o.label}</option>):null}

          </select>
        </div>
        <div className="form-group">
          <label className="text-info">Validateur</label>
          <br />
          <input
            type="text"
            name="validateur"
            id="validateur"
            className="form-control"
            {...register("validateur", { required: true })}
          />
          {errors.validateur && (
            <span className="text-danger">Vlalidator is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="text-info">Date évaluation</label>
          <br />
          <input
            type="date"
            name="dateEvaluation"
            id="dateEvaluation"
            className="form-control"
            {...register("dateEvaluation", { required: true })}
          />
          {errors.dateEvaluation && (
            <span className="text-danger">Date évaluation is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="text-info">Date Validation</label>
          <br />
          <input
            type="date"
            name="dateValidation"
            id="dateValidation"
            className="form-control"
            {...register("dateValidation", { required: true })}
          />
          {errors.dateValidation && (
            <span className="text-danger">Date Validation is required</span>
          )}
        </div>
        <div className="form-group">
              <label className="text-info">Résultats</label>
              <br />
              <input
                type="file"
                name="file"
                multiple
                id="file"
                className="form-control"
                {...register("file", { required: true })}
              />
            </div>
      
        
        <input
          type="submit"
          name="submit"
          value="Submit "
          className="btn btn-info"
        />
      </form>
    </div>
  );
};

export default Add;

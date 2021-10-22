
import client from "./client";

export const addOrgane = (data) => client.post("/api/perso/organes",data);
export const addFoncion = (data) => client.post("/api/perso/fonctions",data);
export const addGrade = (data) => client.post("/api/perso/grades",data);
export const addPersonFields = () => client.get("/api/perso/fields/addPerson");
export const addPerson = (data) => client.post("/api/perso",data);
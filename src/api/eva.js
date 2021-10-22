
import client from "./client";
export const addEvaFields = () => client.get("/api/perso/fields/addEva");
export const addEva = (data, file = "") => {
    const formda = new FormData();
    delete data["file"];
    const blob = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    formda.append("e", blob);
    formda.append("file", file);
    return client.post("/api/eva/upload", formda);
  };
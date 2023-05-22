import axios from "axios";
import { NEW_FOOTPRINT, GET_POST } from "./types";

export function newPost(dataToSubmit) {
  const request = axios
    .post("/api/users/footprint/write", dataToSubmit)
    .then((res) => res.data);

  return {
    type: NEW_FOOTPRINT,
    payload: request,
  };
}

export function getPost() {
  const request = axios
    .post("api/users/footprint/read")
    .then((res) => res.data);

  return {
    type: GET_POST,
    payload: request,
  };
}

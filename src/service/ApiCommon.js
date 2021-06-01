import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/cdd78944cd1b4c208ec4f1fd52a88aef",
  headers: {
    "Content-type": "application/json"
  }
});

import axios from "axios";

export default axios.create({
  baseURL: "https://crudcrud.com/api/8875cea407b746e79c2c7adc36eac631",
  headers: {
    "Content-type": "application/json"
  }
});

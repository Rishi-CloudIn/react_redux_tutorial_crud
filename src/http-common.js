import axios from "axios";

// json-server --watch db.json --port 3004


export default axios.create( {
  baseURL: "http://localhost:3004/",
  headers: {
    "content-type": "application/json"
  }
} );
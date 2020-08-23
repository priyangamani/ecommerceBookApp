import axios from "axios";

//getBookList
export const getBookList = () => 
axios.get("https://www.googleapis.com/books/v1/volumes?q=ak&maxResults=12", {
  headers: {
    'Accept': 'application/json'
  }
}).then(response => {
   return response.data
})
  .catch(err => {
    throw err;
  });
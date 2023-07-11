import axios from "axios";
import {set} from "../slices/booksSlice";
import authHeader from "./auth-header";

const API_URL = "/books";

const getBooks = (dispatch) => {
    return axios.get(API_URL).then(
        (response) => {
            dispatch(set(response.data));
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(set([]));
        });

};

const createBook = (book, dispatch) => {
    return axios.post(API_URL, book,  {headers: authHeader()}).then(
        (response) => {
            getBooks(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const deleteBook = (id, dispatch) => {
    return axios.delete(API_URL + `/${id}`,  {headers: authHeader()}).then(
        (response) => {
            getBooks(dispatch)
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)
        });
};

const bookService = {
    getBooks,
    createBook,
    deleteBook,
};

export default bookService

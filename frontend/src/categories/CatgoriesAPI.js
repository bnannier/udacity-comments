import Config from '../Config'

const api = Config.settings.url;

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want'
}

export const getAll = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

















// componentDidMount() {
//     // const url = `${process.env.REACT_APP_BACKEND}/Categories`;
//     const url = Config.settings.url + `/Categories`;
//     fetch(url, {
//         headers: {'Authorization': 'whatever-you-want'},
//         // credentials: 'include'
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             this.setState({Categories: data.Categories})
//         })
// }


// const api = "https://reactnd-books-api.udacity.com"
//
//
// // Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
//     token = localStorage.token = Math.random().toString(36).substr(-8)
//
// const headers = {
//     'Accept': 'application/json',
//     'Authorization': token
// }
//
// export const get = (bookId) =>
//     fetch(`${api}/books/${bookId}`, { headers })
//         .then(res => res.json())
//         .then(data => data.book)
//
// export const getAll = () =>
//     fetch(`${api}/books`, { headers })
//         .then(res => res.json())
//         .then(data => data.books)
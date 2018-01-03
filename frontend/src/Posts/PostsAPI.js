import Config from '../Config'

const api = Config.settings.url;

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want'
}

export const getAllPostsForCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data.posts)


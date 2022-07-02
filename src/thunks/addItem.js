import {addCard} from "../actions"

const request = (title, imageUrl, isFavorite, price, description, data) => {
    return new Promise((resolve) => {
        const url = new URL("http://localhost:3000/items");
        url.searchParams.append("title", title);
        url.searchParams.append("imageUrl", imageUrl);
        url.searchParams.append("isFavorite", isFavorite);
        url.searchParams.append("price", price);
        url.searchParams.append("description", description);
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => resolve(res.json()))
            .catch(error => console.error(error))
    })
}

export function addItem(title, imageUrl, price, description, data) {
    return ((dispatch) => {
        request(title, imageUrl,false, price, description, data)
            .then(data => {
                dispatch(addCard(data.item))
            })
    })
}
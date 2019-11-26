const dbService = {
    get: function (url, id) {
        return fetch(`http://${ url }${ id ? `/${ id }` : ""}`).then(res => res.json());
    },
    post: function (url, data) {
        return fetch(`http://${ url }`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }
        ).then(res => res.text());
    } 
}

export default dbService;
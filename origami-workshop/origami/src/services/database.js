const dbService = {
    get: function (id) {
        return fetch(`http://localhost:9999/api/origami${id ? `/${id}` : ""}`).then(res => res.json());
    }
}

export default dbService;
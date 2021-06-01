import api from "./ApiCommon";

class UnicornsApi {
    getAll() {
        return api.get("/unicorns");
    }

    get(id) {
        return api.get(`/unicorns/${id}`);
    }

    create(data) {
        return api.post("/unicorns", data);
    }

    update(id, data) {
        return api.put(`/unicorns/${id}`, data);
    }

    delete(id) {
        return api.delete(`/unicorns/${id}`);
    }

    deleteAll() {
        return api.delete(`/unicorns`);
    }
}

export default new UnicornsApi();

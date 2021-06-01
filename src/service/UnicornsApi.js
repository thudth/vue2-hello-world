import api from "@/service/ApiCommon";

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
}

export default new UnicornsApi();

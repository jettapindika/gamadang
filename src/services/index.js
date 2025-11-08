export { authService } from "./authService";
export { menuService } from "./menuService";
export { orderService } from "./orderService";
export { default as api } from "./api";
export { mockApi } from "./mockApi";

// Kantin and Warung services with mock support
import api from "./api";
import { mockApi } from "./mockApi";

const USE_MOCK = true;

export const kantinService = {
  async getAll() {
    return USE_MOCK ? await mockApi.getKantins() : await api.get("/kantin");
  },
  async getById(id) {
    return USE_MOCK
      ? await mockApi.getKantinById(id)
      : await api.get(`/kantin/${id}`);
  },
};

export const warungService = {
  async getByKantin(kantinId) {
    return USE_MOCK
      ? await mockApi.getWarungsByKantin(kantinId)
      : await api.get(`/kantin/${kantinId}/warung`);
  },
  async getByOwner(ownerId) {
    return USE_MOCK
      ? await mockApi.getWarungsByOwner(ownerId)
      : await api.get(`/user/${ownerId}/warung`);
  },
  async getById(id) {
    return USE_MOCK
      ? await mockApi.getWarungById(id)
      : await api.get(`/warung/${id}`);
  },
  async create(warungData) {
    return USE_MOCK
      ? await mockApi.createWarung(warungData)
      : await api.post("/warung", warungData);
  },
  async update(id, warungData) {
    return USE_MOCK
      ? await mockApi.updateWarung(id, warungData)
      : await api.put(`/warung/${id}`, warungData);
  },
  async delete(id) {
    return USE_MOCK
      ? await mockApi.deleteWarung(id)
      : await api.delete(`/warung/${id}`);
  },
};

import api from "./api";
import { mockApi } from "./mockApi";

// Use mock API for testing (set to false when backend is ready)
const USE_MOCK = true;

// Menu Item service
export const menuService = {
  // Get all menu items
  async getAll() {
    const response = USE_MOCK
      ? await mockApi.getMenuItems()
      : await api.get("/menuitem");
    return response.data;
  },

  // Get menu item by ID
  async getById(id) {
    const response = USE_MOCK
      ? await mockApi.getMenuItemById(id)
      : await api.get(`/menuitem/${id}`);
    return response.data;
  },

  // Get menu items by kantin
  async getByKantin(kantinId) {
    const response = USE_MOCK
      ? await mockApi.getMenuItems()
      : await api.get(`/menuitem/kantin/${kantinId}`);
    return response.data;
  },

  // Search menu item by name or price
  async search(params) {
    const response = USE_MOCK
      ? await mockApi.getMenuItems()
      : await api.get("/menuitem/", { params });
    return response.data;
  },

  // Create new menu item
  async create(menuData) {
    const response = USE_MOCK
      ? await mockApi.createMenuItem(menuData)
      : await api.post("/menuitem", menuData);
    return response.data;
  },

  // Update menu item
  async update(id, menuData) {
    const response = USE_MOCK
      ? await mockApi.updateMenuItem(id, menuData)
      : await api.put(`/menuitem/${id}`, menuData);
    return response.data;
  },

  // Delete menu item
  async delete(id) {
    const response = await api.delete(`/menuitem/${id}`);
    return response.data;
  },
};

// Mock API service - simulates backend responses
import {
  mockUsers,
  mockKantins,
  mockWarungs,
  mockMenuItems,
  createMockOrder,
  getMockOrdersByUser,
  getMockOrdersByWarung,
  updateMockOrderStatus,
} from "./mockData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  // Authentication
  async login(email, password) {
    await delay(500); // Simulate network delay

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw {
        response: {
          data: { detail: "Invalid email or password" },
        },
      };
    }

    return {
      data: {
        access_token: `mock_token_${user.id}_${Date.now()}`,
        user_id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  },

  async register(userData) {
    await delay(500);

    const existingUser = mockUsers.find((u) => u.email === userData.email);
    if (existingUser) {
      throw {
        response: {
          data: { detail: "Email already registered" },
        },
      };
    }

    const newUser = {
      id: mockUsers.length + 1,
      ...userData,
      role: "customer",
    };
    mockUsers.push(newUser);

    return {
      data: {
        message: "Registration successful",
        user: newUser,
      },
    };
  },

  // Kantin
  async getKantins() {
    await delay(300);
    return { data: mockKantins };
  },

  async getKantinById(id) {
    await delay(300);
    const kantin = mockKantins.find((k) => k.id === parseInt(id));
    if (!kantin) {
      throw { response: { data: { detail: "Kantin not found" } } };
    }
    return { data: kantin };
  },

  // Warung
  async getWarungsByKantin(kantinId) {
    await delay(300);
    return {
      data: mockWarungs.filter((w) => w.kantin_id === parseInt(kantinId)),
    };
  },

  async getWarungsByOwner(ownerId) {
    await delay(300);
    return {
      data: mockWarungs.filter((w) => w.owner_id === parseInt(ownerId)),
    };
  },

  async getWarungById(id) {
    await delay(300);
    const warung = mockWarungs.find((w) => w.id === parseInt(id));
    if (!warung) {
      throw { response: { data: { detail: "Warung not found" } } };
    }
    return { data: warung };
  },

  async createWarung(warungData) {
    await delay(500);
    const newWarung = {
      id: mockWarungs.length + 1,
      ...warungData,
    };
    mockWarungs.push(newWarung);
    return { data: newWarung };
  },

  async updateWarung(id, warungData) {
    await delay(500);
    const index = mockWarungs.findIndex((w) => w.id === parseInt(id));
    if (index === -1) {
      throw { response: { data: { detail: "Warung not found" } } };
    }
    mockWarungs[index] = { ...mockWarungs[index], ...warungData };
    return { data: mockWarungs[index] };
  },

  async deleteWarung(id) {
    await delay(500);
    const index = mockWarungs.findIndex((w) => w.id === parseInt(id));
    if (index === -1) {
      throw { response: { data: { detail: "Warung not found" } } };
    }
    mockWarungs.splice(index, 1);
    return { data: { message: "Warung deleted successfully" } };
  },

  // Menu Items
  async getMenuItems() {
    await delay(300);
    return { data: mockMenuItems };
  },

  async getMenuItemsByWarung(warungId) {
    await delay(300);
    return {
      data: mockMenuItems.filter((m) => m.warung_id === parseInt(warungId)),
    };
  },

  async getMenuItemById(id) {
    await delay(300);
    const item = mockMenuItems.find((m) => m.id === parseInt(id));
    if (!item) {
      throw { response: { data: { detail: "Menu item not found" } } };
    }
    return { data: item };
  },

  async createMenuItem(menuData) {
    await delay(500);
    const newItem = {
      id: mockMenuItems.length + 1,
      ...menuData,
      ketersediaan: true,
    };
    mockMenuItems.push(newItem);
    return { data: newItem };
  },

  async updateMenuItem(id, menuData) {
    await delay(500);
    const index = mockMenuItems.findIndex((m) => m.id === parseInt(id));
    if (index === -1) {
      throw { response: { data: { detail: "Menu item not found" } } };
    }
    mockMenuItems[index] = { ...mockMenuItems[index], ...menuData };
    return { data: mockMenuItems[index] };
  },

  async deleteMenuItem(id) {
    await delay(500);
    const index = mockMenuItems.findIndex((m) => m.id === parseInt(id));
    if (index === -1) {
      throw { response: { data: { detail: "Menu item not found" } } };
    }
    mockMenuItems.splice(index, 1);
    return { data: { message: "Menu item deleted successfully" } };
  },

  // Orders
  async createOrder(orderData) {
    await delay(500);
    const order = createMockOrder(orderData);
    return { data: order };
  },

  async getOrdersByUser(userId) {
    await delay(300);
    return { data: getMockOrdersByUser(parseInt(userId)) };
  },

  async getOrdersByWarung(warungId) {
    await delay(300);
    return { data: getMockOrdersByWarung(parseInt(warungId)) };
  },

  async updateOrderStatus(orderId, status) {
    await delay(500);
    const order = updateMockOrderStatus(parseInt(orderId), status);
    if (!order) {
      throw { response: { data: { detail: "Order not found" } } };
    }
    return { data: order };
  },
};

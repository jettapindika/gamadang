// Mock data for testing without backend

export const mockUsers = [
  {
    id: 1,
    email: "customer@test.com",
    password: "customer123",
    name: "Test Customer",
    role: "customer",
  },
  {
    id: 2,
    email: "penjual@test.com",
    password: "penjual123",
    name: "Test Penjual",
    role: "penjual",
  },
  {
    id: 3,
    email: "admin@test.com",
    password: "admin123",
    name: "Test Admin",
    role: "admin",
  },
];

export const mockKantins = [
  {
    id: 1,
    nama_kantin: "Kantin Teknik",
    lokasi: "Gedung Teknik Lt. 1",
    jam_buka: "07:00",
    jam_tutup: "17:00",
  },
  {
    id: 2,
    nama_kantin: "Kantin FEB",
    lokasi: "Fakultas Ekonomi dan Bisnis",
    jam_buka: "07:00",
    jam_tutup: "16:00",
  },
];

export const mockWarungs = [
  {
    id: 1,
    nama_warung: "Warung Makan Sederhana",
    owner_id: 2,
    kantin_id: 1,
    deskripsi: "Menyediakan berbagai menu nusantara",
  },
  {
    id: 2,
    nama_warung: "Warung Kopi Mantap",
    owner_id: 2,
    kantin_id: 1,
    deskripsi: "Spesialis kopi dan minuman",
  },
];

export const mockMenuItems = [
  {
    id: 1,
    nama_menu: "Nasi Goreng",
    harga: 15000,
    deskripsi: "Nasi goreng spesial dengan telur",
    kategori: "Makanan Berat",
    ketersediaan: true,
    warung_id: 1,
    gambar_url: "https://via.placeholder.com/300x200?text=Nasi+Goreng",
  },
  {
    id: 2,
    nama_menu: "Mie Ayam",
    harga: 12000,
    deskripsi: "Mie ayam dengan topping lengkap",
    kategori: "Makanan Berat",
    ketersediaan: true,
    warung_id: 1,
    gambar_url: "https://via.placeholder.com/300x200?text=Mie+Ayam",
  },
  {
    id: 3,
    nama_menu: "Es Teh Manis",
    harga: 3000,
    deskripsi: "Es teh manis segar",
    kategori: "Minuman",
    ketersediaan: true,
    warung_id: 1,
    gambar_url: "https://via.placeholder.com/300x200?text=Es+Teh",
  },
  {
    id: 4,
    nama_menu: "Kopi Hitam",
    harga: 5000,
    deskripsi: "Kopi hitam premium",
    kategori: "Minuman",
    ketersediaan: true,
    warung_id: 2,
    gambar_url: "https://via.placeholder.com/300x200?text=Kopi+Hitam",
  },
  {
    id: 5,
    nama_menu: "Cappuccino",
    harga: 15000,
    deskripsi: "Cappuccino dengan latte art",
    kategori: "Minuman",
    ketersediaan: true,
    warung_id: 2,
    gambar_url: "https://via.placeholder.com/300x200?text=Cappuccino",
  },
  {
    id: 6,
    nama_menu: "Roti Bakar",
    harga: 10000,
    deskripsi: "Roti bakar dengan selai",
    kategori: "Snack",
    ketersediaan: true,
    warung_id: 2,
    gambar_url: "https://via.placeholder.com/300x200?text=Roti+Bakar",
  },
];

export const mockOrders = [];

let orderIdCounter = 1;

export function createMockOrder(orderData) {
  const newOrder = {
    id: orderIdCounter++,
    user_id: orderData.user_id,
    warung_id: orderData.warung_id,
    total_harga: orderData.total_harga,
    status: "pending",
    catatan: orderData.catatan || "",
    created_at: new Date().toISOString(),
    items: orderData.items,
  };
  mockOrders.push(newOrder);
  return newOrder;
}

export function getMockOrdersByUser(userId) {
  return mockOrders.filter((order) => order.user_id === userId);
}

export function getMockOrdersByWarung(warungId) {
  return mockOrders.filter((order) => order.warung_id === warungId);
}

export function updateMockOrderStatus(orderId, status) {
  const order = mockOrders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
}

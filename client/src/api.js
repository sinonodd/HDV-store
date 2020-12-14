let API_URL = 'http://hdv-store-api.vercel.app';
if (window.location.hostname === 'localhost') {
  API_URL = 'localhost:8080';
}

export async function isAdmin() {
  const response = await fetch(`${API_URL}/auth/isAdmin`);
  return response.json();
}

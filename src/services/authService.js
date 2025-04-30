const API_URL = "https://example.com/api"; // Replace with actual backend URL

export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    return data; // Expected to contain auth token and user info
  } catch (error) {
    throw error;
  }
}

export async function register(userData) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Registration failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

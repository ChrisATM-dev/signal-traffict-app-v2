// const api = 'http://localhost:3000/auth/';
const api = 'https://example-jwt.onrender.com/auth';

export const fetchLogin = async (data) => {
    try {
      const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

export const fetchRegister = async (data) => {
try {
    const response = await fetch(`${api}/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
} catch (error) {
    throw new Error(error);
}
}
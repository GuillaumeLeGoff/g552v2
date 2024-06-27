const urlApi = import.meta.env.VITE_REACT_APP_API_URL;

class AuthService {
  static async login(username: string, password: string) {
    try {
      const apiUrl = `${urlApi}/auth/login`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }

      return result;
    } catch (error) {
      console.log(error);

      console.error("Erreur lors de la tentative de connexion:", error);
      throw error;
    }
  }
}

export default AuthService;

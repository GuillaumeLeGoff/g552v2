const urlApi = import.meta.env.VITE_REACT_APP_API_URL;

class UserService {
  static async getUsers() {
    try {
      const apiUrl = `${urlApi}/users`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const users = result.data; // Extraire les utilisateurs de la clé 'data'
      return users;
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      throw error;
    }
  }

}

export default UserService;


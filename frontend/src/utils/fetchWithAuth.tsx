const fetchWithAuth = async (url: string, method: string, body?: JSON) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Aucun jeton d'authentification trouvé");
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method,
    headers,
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        throw new Error(
          `La requête a échoué avec le statut ${response.status}`
        );
      }
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchWithAuth;

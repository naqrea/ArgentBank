const apiUrl = import.meta.env.VITE_API_URL;

///////////////////////////// LOGIN
export async function login(email, password) {
  try {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Connexion échouée");
    }

    const data = await response.json();
    return data.body.token;
  } catch (error) {
    console.error("Erreur durant la connexion", error);
    throw error;
  }
}

///////////////////////////// GET PROFILE
export async function getProfile(token) {
  try {
    const response = await fetch(`${apiUrl}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ajout du token dans les en-têtes
      },
    });

    if (!response.ok) {
      throw new Error("Échec de la récupération du profil");
    }

    const data = await response.json();
    return data.body; // Renvoie les données du profil utilisateur
  } catch (error) {
    console.error("Erreur lors de la récupération du profil", error);
    throw error;
  }
}

///////////////////////////// UPDATE PROFILE

export async function updateProfileApi(userName) {
  // Changer username en userName ici
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          localStorage.getItem("token") || sessionStorage.getItem("token")
        }`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      throw new Error("Mise à jour échouée");
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    console.error("Erreur durant la mise à jour du profil", error);
    throw error;
  }
}

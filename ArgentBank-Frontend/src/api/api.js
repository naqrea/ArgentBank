const apiUrl = import.meta.env.VITE_API_URL;

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
    const token = data.body.token;

    localStorage.setItem("token", token);

    console.log("Enregistrement réussi");
  } catch (error) {
    console.error("Erreur durant la connexion", error);
  }
}

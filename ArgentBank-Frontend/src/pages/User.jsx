import React, { useEffect, useState } from "react";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/slices/profileSlice";
import { updateProfileApi, getProfile } from "../api/api"; // Importer la fonction pour récupérer le profil

const User = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile); // Récupérer le profil depuis le store
  const token = useSelector((state) => state.auth.token); // Récupérer le token depuis le store d'authentification

  // État pour gérer l'affichage du formulaire d'édition
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(""); // Initialiser userName comme chaîne vide

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Toggle l'état d'édition
  };

  const handleSave = async () => {
    try {
      // Appel à l'API pour mettre à jour le User Name
      const updatedProfile = await updateProfileApi(userName); // Assure-toi que cette fonction renvoie l'objet complet du profil
      dispatch(updateProfile(updatedProfile)); // Envoie le profil complet
      setIsEditing(false); // Fermer le formulaire après sauvegarde
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil", error);
    }
  };

  useEffect(() => {
    // Fonction pour récupérer le profil de l'utilisateur
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile(token); // Récupérer les données du profil avec le token
        dispatch(updateProfile(profileData)); // Mettre à jour le profil dans Redux
        setUserName(profileData.userName); // Initialiser userName avec le profil récupéré
      } catch (error) {
        console.error("Erreur lors de la récupération du profil", error);
      }
    };

    fetchProfile(); // Appeler la fonction pour récupérer le profil
  }, [dispatch, token]); // L'effet dépend également du token

  // Vérifier si le profil est disponible avant de rendre le reste du composant
  if (!profile) {
    return <div>Loading...</div>; // Affiche un message de chargement si le profil n'est pas encore chargé
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile ? `${profile.firstName} ${profile.lastName}` : "User"}!
        </h1>
        {!isEditing ? (
          <button className="edit-button" onClick={handleEditToggle}>
            Edit Name
          </button>
        ) : (
          <form className="edit-form">
            <div className="input-wrapper">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                value={userName} // Utiliser userName ici
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={profile.firstName} // Afficher le firstName
                disabled // Rendre le champ disabled
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={profile.lastName} // Afficher le lastName
                disabled // Rendre le champ disabled
              />
            </div>
            <div className="edit-form-buttons">
              <button
                type="button"
                className="edit-button"
                onClick={handleEditToggle}
              >
                Cancel
              </button>
              <button
                type="button"
                className="edit-button"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
};

export default User;

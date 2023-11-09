import { findUserByEmail, addUser } from "../dao/user.dao.js";
import jwt from "jsonwebtoken";

export const loginAction = async (request, response) => {
  try {
    const user = await findUserByEmail(request.body.email);

    // Vérifie si l'utilisateur existe ou si le mot de passe ne correspond pas
    if (!user || !compareSync(request.body.password, user.password)) {
      // Retourne une réponse avec un statut 401 (Non autorisé) et un message d'erreur
      return response.status(401).json({ message: "Wrong credentials" });
    }

    // Prépare les données à inclure dans le token JWT en excluant le mot de passe
    const { password, ...payload } = user;

    // Génère un token JWT avec les données de l'utilisateur
    const token = jwt.sign(payload, process.env.SECRET);
    // Retourne une réponse avec un statut 200 (OK) et le token généré
    return response.status(200).json({ user: payload, token });
  } catch (error) {
    // En cas d'erreur, affiche l'erreur dans la console
    console.log(error);

    // Retourne une réponse avec un statut 500 (Erreur interne du serveur) et un message d'erreur
    response
      .status(500)
      .json({ message: "An internal server error has occured" });
  }
};

export const signupAction = async (request, response) => {
  try {
    const userWithSameEmail = await findUserByEmail(request.body.email);
    //verifier s'il existe un utilisteur avec le meme email ou username
    if (userWithSameEmail) {
      //si oui on envoie une erreur
      return response.status(401).json({
        message: "A user with the same email already exists",
      });
    }
    //si tous les verification passent on continue
    //recuperer les infos dans la requete
    const user = { ...request.body };
    //enregistrer l'utilisateur dans la base de donnees.
    const createdUser = await addUser(user.username, user.email, user.password);
    //creer un jwt pour l'utilisateur
    const { password, ...payload } = createdUser;
    const token = jwt.sign(payload, process.env.SECRET);
    //envoyer une reponse avec les infos de l'utilisateur
    return response.status(201).json({ user: payload, token });
  } catch (error) {
    console.log(error);
    //en cas d'erreur on envoie un message d'erreur du code 500
    return response.status(500).json("An error occured in the server");
  }
};

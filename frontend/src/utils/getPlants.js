import axios from "axios";
import { API_ROUTES } from "./routes";

export const getAllPlants = async () => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_KEY}${API_ROUTES.Plants}`
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";
import { findUserByEmail } from "../../user/dao/user.dao.js";
import { insertOrder } from "../daos/order.dao.js";

export const insertOrderAction = async (request, response) => {
  try {
    const clientEmail = request.body.email;
    const client = await findUserByEmail(clientEmail);
    const plantsOrdered = request.body.plantsOrdered.map(
      (plant) => new mongoose.Types.ObjectId(plant.id)
    );
    await insertOrder(
      client,
      request.body.deliveryAddress,
      request.body.totalToPay,
      plantsOrdered
    );
    response.status(201).json({ message: "Order Saved" });
  } catch (error) {
    response
      .status(500)
      .json({ message: "An internal server error has occured" });
    console.log(error);
  }
};

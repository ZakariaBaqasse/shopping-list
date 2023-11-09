import Order from "../models/order.model.js";

export const insertOrder = async (
  client,
  deliveryAddress,
  totalToPay,
  plantsOrdered
) => {
  try {
    const newOrder = new Order({
      deliveryAddress,
      totalToPay,
      client: client._id,
    });
    newOrder.plantsOrdered = plantsOrdered;
    return newOrder.save();
  } catch (error) {
    console.log("Error in Order DAO: insertOrder: ", error);
    throw new Error(error);
  }
};

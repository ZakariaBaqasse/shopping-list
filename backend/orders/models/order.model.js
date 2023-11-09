import { model, Schema } from "mongoose";

const Order = model(
  "Order",
  new Schema({
    deliveryAddress: String,
    totalToPay: Number,
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    plantsOrdered: [
      {
        type: Schema.Types.ObjectId,
        ref: "Plant",
      },
    ],
  })
);

export default Order;

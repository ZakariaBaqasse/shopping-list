import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import PlantItem from "../components/PlantItem";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { API_ROUTES, ROUTES } from "../utils/routes";
import { useNavigate } from "react-router-dom";

export function OrderPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      deliveryAddress: "",
    },
    mode: "onTouched",
  });
  const orderedPlants = JSON.parse(window.localStorage.getItem("cart"));
  let totalPrice = 0;
  orderedPlants.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState();
  const [insertResponse, setInsertResponse] = useState("");
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const userData = JSON.parse(window.localStorage.getItem("userData"));
      const orderData = {
        email: userData._doc.email,
        deliveryAddress: data.deliveryAddress,
        totalToPay: totalPrice,
        plantsOrdered: orderedPlants,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}${API_ROUTES.NewOrder}`,
        { ...orderData }
      );
      setInsertResponse(response.data.message);
      setTimeout(() => navigate(ROUTES.Home), 1000);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrors(error);
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Typography variant="h4" color="blue-gray">
        Confirm Order
      </Typography>
      {error && <Alert color="red">{error.message}</Alert>}
      {insertResponse && <Alert color="green">{insertResponse}</Alert>}
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Delivery Address
          </Typography>
          <Input
            size="lg"
            placeholder="125 Somewhere in the world"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("deliveryAddress")}
          />
          <div className=" flex justify-center flex-row">
            {orderedPlants.map((plant) => {
              <PlantItem plant={plant} key={plant.name} />;
            })}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Total to pay: {totalPrice} $
            </Typography>
          </div>
        </div>
        <Button type="submit" className="mt-6" fullWidth disabled={loading}>
          {loading ? <Spinner /> : "Place Order"}
        </Button>
      </form>
    </Card>
  );
}

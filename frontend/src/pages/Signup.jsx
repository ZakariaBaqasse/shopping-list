import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_ROUTES, ROUTES } from "../utils/routes";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}${API_ROUTES.Signup}`,
        {
          email: data.email,
          username: data.username,
          password: data.password,
        }
      );
      window.localStorage.setItem(
        "userData",
        JSON.stringify(response.data.user)
      );
      window.localStorage.setItem("token", response.data.token);
      setLoading(false);
      navigate(ROUTES.Home);
    } catch (error) {
      console.log(error);
      setErrors(error);
      setLoading(false);
    }
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      {errors && <Alert color="red">{errors.data.message}</Alert>}
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="John"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("username")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("password")}
          />
        </div>
        <Button type="submit" className="mt-6" fullWidth disabled={loading}>
          {loading ? <Spinner /> : "Sign up"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={ROUTES.Login} className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

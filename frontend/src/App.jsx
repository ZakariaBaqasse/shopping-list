import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTES } from "./utils/routes";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { OrderPage } from "./pages/OrderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
        <Route path={ROUTES.Login} element={<Login />} />
        <Route path={ROUTES.Signup} element={<Signup />} />
        <Route path={ROUTES.NewOrder} element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;


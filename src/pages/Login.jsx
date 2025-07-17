import { useNavigate, useLocation} from "react-router-dom";
import { useAuth } from "../context";
import { Suspense } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSumbit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    auth.singin(username, () => {
      navigate(from),
      {replace: true}
    });
  };
  return (
    <>
    <Suspense fallback={<div>Загрузка...</div>}>
      <form onSubmit={handleSumbit}>
        <label htmlFor="">
          Username: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
      </Suspense>
    </>
  );
};

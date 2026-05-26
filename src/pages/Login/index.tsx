import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__logo">
          <img src="/lendsqr-logo.svg" alt="Lendsqr" />
        </div>
        <div className="login__illustration">
          <img src="/hero.png" alt="illustration" />
        </div>
      </div>

      <div className="login__right">
        <div className="login__form-wrapper">
          <h1 className="login__title">Welcome!</h1>
          <p className="login__subtitle">Enter details to login.</p>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__field">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login__field login__field--password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="login__show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <a href="#" className="login__forgot">
              FORGOT PASSWORD?
            </a>

            <button type="submit" className="login__btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  // const username = useMemo(
  //   () => currentUser.bc.email.split("@")[0],
  //   [currentUser]
  // );
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          className="nav-logo"
          alt="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <button onClick={handleLogout}>
          <img
            alt="avatar"
            className="nav-ava"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          />
          {/* {username} */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

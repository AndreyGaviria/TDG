import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleIniciarSesion = () => {
    navigate("/proyectos");
  };

  return (
    <div>
      <button
        type="button"
        className="btn-iniciar-sesion"
        onClick={handleIniciarSesion}
      >
        Iniciar sesión
      </button>
    </div>
  );
}
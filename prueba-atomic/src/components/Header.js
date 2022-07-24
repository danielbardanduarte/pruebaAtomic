import React from "react";
import "../styles/Header.css";
import fondin from "../Paquete-Atomic/Mask Group 1.png";
import m1 from "../Paquete-Atomic/Group 4032.png";
import flecha from "../Paquete-Atomic/Group 4013.png";
import Button from "./Button";
import { Layout, Col, Row } from "antd";
const { Content, Footer } = Layout;

const Header = () => {

  return (
    <>
      <header>
        <div className="section">
          <div>
            <img src={fondin} className="fondo" />
            <img src={m1} className="m1" />
            <div>
              <img className="flecha" src={flecha} />

              <div className="container">
                <h1 className="white">Desarrolla todo</h1>
                <h1 className="rojo">tu POTENCIAL</h1>
                <h1 className="white">dentro del equipo</h1>
                <h1 className="bold">ATOMICLABS</h1>
                <Button/>
              </div>
              <p className="saber">Quiero saber más</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

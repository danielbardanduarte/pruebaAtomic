import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Steps, Layout, Form, Button, Input, Col, Divider, Row } from "antd";
import headerLogo from "../Paquete Atomic/Group4035.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const { Step } = Steps;

const { Header, Content, Footer } = Layout;

const Verification = () => {
  const [progress, setProgress] = useState(20);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [step, setStep] = useState(1);
  const [titleText, setTitleText] = useState(
    "Queremos saber que eres tu, por favor ingresa los siguientes datos:"
  );

  const onFinish = (values) => {
    const progressCal = progress + 20;
    setProgress(progressCal);
    setTitleText("VALIDA TU CELULAR");
    setStep(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeSubmit = (e) => {
    console.log("-----", e);
    if (e.target.value) setButtonDisabled(false);
  };

  return (
    <Layout className="layout">
    <h1>
asdasdas
    </h1>
    </Layout>
  );
};
export default Verification;

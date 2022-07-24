import React, { useEffect, useState } from "react";
import "../styles/login.css"
import "antd/dist/antd.css";
import "./index.css";
import { Steps, Layout, Form, Button, Input, Col, Divider, Row } from "antd";
import fondo from "../Paquete-Atomic/Mask Group 1.png"
import mono from "../Paquete-Atomic/Group 4033.png"
import twitter from "../Paquete-Atomic/twitterLogo.png"
import linkedin from "../Paquete-Atomic/linkedinLogo.png"
import ProgressBar from "react-bootstrap/ProgressBar";
import uno from "../Paquete-Atomic/unon.png"
import unito from "../Paquete-Atomic/unito.png"
import dos from "../Paquete-Atomic/dos.png"
import tres from "../Paquete-Atomic/tres.png"
import cuatro from "../Paquete-Atomic/cuatro.png"
import dosG from "../Paquete-Atomic/dosG.png"
import tresG from "../Paquete-Atomic/tresG.png"



const { Step } = Steps;

const { Header, Content, Footer } = Layout;

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [loadingText, setLoadingText] = useState("");
  
  const onFinishCode = () => {
    setLoadingAnimation(true)
    setTimeout(setLoadingText('Hemos enviado el codigo...'), 3000);
    setLoading(true);
  }
  
  const onFinish = React.useCallback((values) => {
    const progressCal = progress + 20;
    setProgress(progressCal);
    setStep(step + 1);
    if (step === 2) {
      setPhoneNumber(values.phone);
    }
    if (step === 3) setLoading(true);
  });

  useEffect(() => {
    onFinish();
  }, [])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
   
    <Layout className="layout">
    <img style={{backgroundSize: "cover"}} src={fondo} className="fondo"/>
    <img style={{ position:"absolute", marginLeft: "65%", marginTop: "1%"}} src={loading ? null : mono} className="mono"/>
   
    <img src={unito} className="unito"/>
    <img src={dos} className="dos"/>
    <img src={tres} className="tres"/>
    <img src={cuatro} className="cuatro"/>

    
      {loading ? (
        <>
        <div style={{ width: "100%", height:"100%" }} className="containerLoading">
                <h5 style={{ color: "white" }}>{loadingText}</h5>
              </div>
        </>
      ) : (
        <>
          <Content>
       
            <ProgressBar variant="danger" now={progress} />
            <div className="divi" >
              <Row>
                <Col span={15}>
                  {step === 1 ? (
                    <>
                     <div style={{display:"inline"}}>
                       <img src={uno} className="uno"/>
                       <h1 className="t1">TE QUEREMOS CONOCER </h1>
                       </div>
                      <h6 className="queremos">
                        Queremos saber que eres tú, por favor ingresa los
                        siguientes datos:
                      </h6>
                      <Form 
                        name="basic"
                        labelCol={{
                          span: 4,
                        }}
                        wrapperCol={{
                          span: 12,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                     
                    
                    <h6 className="codigoVer">Nombre(s):</h6>
                      <div className="inpu">
                        <Row>
                          <Col span={24}>
                          <Form.Item
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: 'Debes ingresar al menos 5 caracteres',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          </Col>
                          </Row>
                          </div>
        
                        <h6 className="codigoVer">Apellidos:</h6>
                      <div className="inpu">
                        <Row>
                          <Col span={12}>
                          <Input placeholder=""/>
                          </Col>
                          </Row>
                          </div>
                       

                        <Form.Item
                          wrapperCol={{
                            offset: 20,
                            span: 16,
                          }}
                        >
                          <button className="enviar">
                            Enviar
                          </button>
                        </Form.Item>
                      </Form>
                    </>
                  ) : null}
                  {step === 2 ? (
                    <>
                    <div style={{display:"inline"}}>
                       <img src={dosG} className="dosG"/>
                       <h1 className="t1">VALIDA TU CELULAR </h1>
                       </div>
                      <h5 className="codigo">{titleText}</h5>
                      <h6 className="nece">Necesitamos validar tu número para continuar</h6>
                      <h6 className="ingresa">
                        Ingresa tu número a 10 digitos y te enviaremos un codigo
                        SMS
                      </h6>
                      <Form
                        name="basic"
                        labelCol={{
                          span: 6,
                        }}
                        wrapperCol={{
                          span: 12,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                      <h6 className="codigoVer">Número de celular</h6>
                      <div className="inpu">
                        <Row>
                          <Col span={24}>
                          <Form.Item
                            name="phone"
                            rules={[
                              {
                                required: true,
                                message: 'Debes ingresar tu telefono',
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          </Col>
                          </Row>
                          </div>

                        <Form.Item
                          wrapperCol={{
                            offset: 20,
                            span: 16,
                          }}
                        >
                          <button type="submit" className="enviar">
                            Continuar
                          </button>
                        </Form.Item>
                      </Form>{" "}
                    </>
                  ) : null}
                  {step === 3 ? (
                    <>
                    <div style={{display:"inline"}}>
                       <img src={tresG} className="dosG"/>
                       <h1 className="t1">CÓDIGO DE VERIFICACIÓN </h1>
                       </div>
                      <h5>{titleText}</h5>
                      <h5 className="te">Te enviaremos un SMS al número:</h5>
                      <h5 className="num">{phoneNumber}</h5>
                      <h6 className="in">Ingrese el código de verificación:</h6>
                      <Form
                        name="basic"
                        labelCol={{
                          span: 6,
                        }}
                        wrapperCol={{
                          span: 12,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinishCode}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                      <h6 className="codigoVer">Codigo de verificacion:</h6>
                      <div className="inpu">
                        <Row>
                          <Col span={10}>
                          <Input placeholder="" />
                          </Col>
                          </Row>
                          </div>
                        <h6 className="no">¿No recibiste el código? Reenviar codigo</h6>

                        <Form.Item
                          wrapperCol={{
                            offset: 20,
                            span: 16,
                          }}
                        >
                          <button className="enviar">
                            Validar codigo
                          </button>
                        </Form.Item>
                      </Form>{" "}
                    </>
                  ) : null}
                  
                </Col>
                <Col span={12}></Col>
              </Row>
            </div>
          </Content>
          <Footer
            style={{
              borderTop: "1px solid #e8e8e8",
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "black",
              textAlign: "center"
            }}
          >
          <Row>
            <Col span={8}><b style={{ color: "white" }}>© 2020 AtomicLabs. Todos los derechos reservados</b></Col>
            <Col span={8} offset={8}>
              <div style={{ display: "inline"}}>
                <b><u style={{ color: "white" }}>Aviso de privacidad</u></b>
                <img  style={{ marginLeft: "8vh", height: "5vh"}} src={linkedin} />
                <img  style={{  marginLeft: "8vh", height: "5vh"}} src={twitter} />
              </div>
            </Col>
          </Row>
          </Footer>
        </>
      )}
    </Layout>
  
  );
};
export default Login;

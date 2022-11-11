import Form from "./Form";
import { useNavigate } from "react-router-dom";
import Bqlogo from "../../images/Bqlogo.png"
import './Login.css';

function LoginView() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/Admin");
  }
    return (
      <div className="container">
        <img className="burgerlogo" src ={Bqlogo} alt="logo"></img>
        <div className="container-form">
         <h1>Login view</h1>
         <Form/>
         <button onClick={handleClick}>Boton de prueba</button>
        </div>
      </div>
    );
  }

export default LoginView;
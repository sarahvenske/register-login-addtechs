import Container from "./style";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

const RegisterHeader = () => {

    const navigate = useNavigate();

    return(
            <Container>
               <Logo/>
                <button onClick={() => navigate("/")}>Voltar</button>
            </Container>
    )
}

export default RegisterHeader;

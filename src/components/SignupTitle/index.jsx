import Container from "./style";
import LogoKenzieHub from "../LogoKenzieHub";
import { Link } from "react-router-dom";

const SignupTitle = () => {
    return(
            <Container>
               <LogoKenzieHub/>
               <Link to="/" >
                <button>Voltar</button>
               </Link>
            </Container>
    )
}

export default SignupTitle;

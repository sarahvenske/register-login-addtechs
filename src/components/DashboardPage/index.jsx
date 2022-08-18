import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext";

import Container from "./style";
import Logo from "../Logo";

const DashboardPage = () => {

    const { user, userLogout } = useContext(AuthContext);

    return(
            <Container>
                <header>
                    <Logo/>
                    <button onClick={userLogout}>Sair</button>
                </header>
                <main>
                    <section className="firstSection">
                        <div>
                            <h2>Olá, {user.name}</h2>
                            <p>{user.course_module}</p>
                        </div>
                    </section>
                    <section className="secondSection">
                        <div>
                            <p>Que pena! Estamos em desenvolvimento :(</p>
                            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
                        </div>
                    </section>
                </main>
            </Container>
    )
}

export default DashboardPage;


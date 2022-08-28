import Container from "./style.js";

const Modal = ({children}) => {
    
    return (
        <Container>
            <div className="modalComponentBox">
                {children}
            </div>
        </Container>
    )
}

export default Modal;
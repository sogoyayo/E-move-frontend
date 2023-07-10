import { StyledActions } from "./styles/actions.styled";
import { useContext } from "react";
import { ModalContext } from "../../context/dashboardContext";

export const Actions = () => {
    const { modals, setModals }:any = useContext(ModalContext);
    
    const handleShow = () => {
    setModals({...modals, editAndDeleteModal: true})
  }
    return (
        <StyledActions onClick={handleShow}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </StyledActions>
    );
}
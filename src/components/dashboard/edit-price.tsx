import { StyledEditPrice} from "./styles/editPrice.styled";
import Button from "./button";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "../../context/dashboardContext";
import { useContext } from "react";

const EditPrice = () => {
  const { modals, setModals }:any = useContext(ModalContext)
  const handleClose = () => {
    setModals({...modals, editPriceModal: false})
  }
  
  return (
    <StyledEditPrice>
      <div className="newPriceModal">
        <h1>Edit Price</h1>
        <FaTimes onClick={handleClose} className="close" />
      </div>
      <div className="field">
        <label className="label" htmlFor="name">
          New Price
        </label>
        <div className="inputbox">
          <input type="text" placeholder="NGN 0.00" />
        </div>
      </div>
      <Button bookTrip="" text="Set New Price" formText={""} />
    </StyledEditPrice>
  );
};

export default EditPrice;

import EditPrice from "../edit-price";
import { StyledPricing } from "../styles/pricing.styled";
import { ModalContext } from "../../../context/dashboardContext";
import { useContext } from "react";

const Pricing = () => {
  const { modals, setModals }:any = useContext(ModalContext)
  const { editPriceModal } = modals
  
  const handleShow = () => {
    setModals({...modals, editPriceModal: true})
  }

  return (
    <StyledPricing>
      {editPriceModal && <EditPrice />}
      <div className="top">
        <h1>Pricing Overview</h1>
        <p>You can add a specific route and it's applicable price</p>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Routes</th>
              <th>Pricing</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td>
                <p>Oshodi - Ikeja</p>
              </td>
              <td>
                <div className="flex">
                  <p>NGN 300</p>
                  <span>Standard price</span>
                </div>
              </td>
              <td>
                <button onClick={handleShow} className="edit">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </StyledPricing>
  );
};

export default Pricing;

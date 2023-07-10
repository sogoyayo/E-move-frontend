import { StyledBookTripSuccess } from '../styles/BookTripSucModal.styled'
import check from "../images/success.png";
import { useContext } from 'react';
import { ModalContext } from '../context/dashboardContext';

const BookTripSuccessModal = () => {
  const { modals, setModals }: any = useContext(ModalContext);

   const handleClose = () => {
    setModals({...modals, bookTripSuccess:false})
   }
  return (
    <StyledBookTripSuccess>
      <div className="box">
        <img src={check} alt="an email icon" />
        <h1>Successful</h1>
        <p>
          You have successfully booked a Ride from Bariga to Gbagada at the rate of NGN600
        </p>
        <button onClick={handleClose} className='booktripBtn'>Close</button>
      </div>
    </StyledBookTripSuccess>
  )
}

export default BookTripSuccessModal;

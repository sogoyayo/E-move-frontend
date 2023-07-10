import { StyledButton } from "./styles/button.styled";



const Button = (props: { text: string; formText: string,  bookTrip: string}) => {
    const text: string = props.text;
    const formText: string = props.formText;
    const bookTrip: string = props.bookTrip;
    
    return ( 
        <StyledButton  className="btn" type="submit">{ bookTrip || text || formText }</StyledButton>
     );
}
 
export default Button;
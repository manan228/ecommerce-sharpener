import axios from "axios";
import { useRef } from "react";

const ContactUs = () => {
  const nameInputref = useRef();
  const emailIdInputref = useRef();
  const phoneNumberInputref = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
        const userData = {
            name: nameInputref.current.value,
            emailId: emailIdInputref.current.value,
            phoneNumner: phoneNumberInputref.current.value
          };
      
          const response = await axios.post(
            "https://react-http-b7832-default-rtdb.firebaseio.com/user.json",
            userData
          );

          console.log(response.data);
    }
    catch(error) {
        console.log(error)
    }
  };
  return (
    <form>
      <div>
        <span>Name</span>
        <input type="text" ref={nameInputref}></input>
      </div>
      <div>
        <span>Email id</span>
        <input type="text" ref={emailIdInputref}></input>
      </div>
      <div>
        <span>Phone Number</span>
        <input type="text" ref={phoneNumberInputref}></input>
      </div>
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </form>
  );
};

export default ContactUs;

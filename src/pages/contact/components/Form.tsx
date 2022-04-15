import { Input } from "../../../shared";
import { FormDiv, InputContainer } from "./Form.styled";

const Form = () => {
  return (
    <FormDiv className="form-container">
      <h2>Get in touch</h2>
      <InputContainer>
        <Input placeholder={"Your Name"} onChange={(e) => {}} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={"Your Email"} onChange={(e) => {}} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={"Your Company (Optional)"} onChange={(e) => {}} />
      </InputContainer>
    </FormDiv>
  );
};

export default Form;

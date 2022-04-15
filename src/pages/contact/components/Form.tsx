import { Input } from "../../../shared";
import TextArea from "../../../shared/TextArea/TextArea";
import { FormDiv, InputContainer, TextAreaContainer } from "./Form.styled";

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
      <TextAreaContainer>
        <TextArea placeholder={"Your Message"} onChange={(e) => {}} />
      </TextAreaContainer>
    </FormDiv>
  );
};

export default Form;

import React from "react";
import { Button, Input } from "../../../shared";
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
        <Input placeholder={"Your Email"} onChange={(e) => {}} type={"email"} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={"Your Company (Optional)"} onChange={(e) => {}} />
      </InputContainer>
      <TextAreaContainer>
        <TextArea placeholder={"Your Message"} onChange={(e) => {}} />
      </TextAreaContainer>
      <Button label={"Send"} callback={() => {}} />
    </FormDiv>
  );
};

export default Form;

import styled from "styled-components";
import { colors } from "../../../utils";

export const FormDiv = styled.div`
  width: 100%;
  border: solid 5px ${colors.darkGreen};
  border-radius: 15px;
  padding: 25px;
  background: rgb(62, 62, 62);
  background: radial-gradient(
    circle,
    rgba(62, 62, 62, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin: 10px 0;
  width: 100%;
`;

export const TextAreaContainer = styled.div`
  margin: 10px 0;
  width: 100%;
`;

import styled from "styled-components";
import { colors } from "../../utils";

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 145px;
  font-size: 18px;
  background: white;
  border: none;
  border-radius: 10px;
  border-bottom: 2px solid ${colors.gray};
  padding: 10px 0 0 10px;
`;

import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";
import levelup from "../../assets/icons/levelup.svg";

export const ModalContainer = styled("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(242, 243, 245, 0.8);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled("div")`
  font-family: inter;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  position: relative;
  padding: 40px 40px 40px 40px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  gap: 10px;

  h1,
  h2,
  p {
    padding: 0;
    margin: 0;
  }

  h2 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgba(46, 56, 77, 1);
  }
  p {
    font-size: 18px;
    color: rgba(102, 102, 102, 1);
  }

  .c-buttons-container {
    margin-top: 10px;
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

export const CloseButton = styled(Button)`
  background: #5965e0;
  color: #fff;

  &:hover {
    background: #5965e0;
    filter: brightness(0.9);
  }
`;

export const ConfirmButton = styled(Button)`
  background: #ea4335;
  color: #fff;

  &:hover {
    background: #ea4335;
    filter: brightness(0.9);
  }
`;

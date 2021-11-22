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
  padding: 20px 40px 40px 40px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);

  h1,
  h2,
  p {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 140px;
    font-weight: 600;
    color: rgba(89, 101, 224, 1);
    background: url(${levelup}) no-repeat center;
  }
  h2 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgba(46, 56, 77, 1);
  }
  p {
    font-size: 20px;
    color: rgba(102, 102, 102, 1);
  }
`;

export const CloseButton = styled("div")`
  img {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;

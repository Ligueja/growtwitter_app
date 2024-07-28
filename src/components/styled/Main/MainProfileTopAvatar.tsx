import styled from "styled-components";
import backgroundImage from "../../../assets/default_profile.png";

export const MainProfileTopAvatar = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 6px solid rgb(51, 51, 51);
  position: absolute;
  bottom: -45px;
  left: 12px;
  background-image: url(${backgroundImage});
  background-position: center center;
  background-size: cover;
`;

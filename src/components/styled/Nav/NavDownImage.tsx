import styled from "styled-components";
import backgroundImage from "../../../assets/default_profile.png";

export const NavDownImage = styled.img`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-image: url(${backgroundImage});
  background-position: center center;
  background-size: cover;
`;

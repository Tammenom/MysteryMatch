import styled, { css } from "styled-components";
import backgroundHome from "@/img/backgroundHome.jpg";
import backgroundRules from "@/img/backgroundRules.jpg";
import backgroundSettings from "@/img/backgroundSettings.jpg";
import backgroundGame from "@/img/backgroundGame.jpg";

const sharedStyles = css`
  background-repeat: no-repeat;
  background-position: center;
  background-position: center;
  background-size: cover;
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
`;

export const GameDiv = styled.div`
  ${sharedStyles}
  background-image: url(${backgroundGame});
  background-color: #0b0716;
`;

export const SettingsDiv = styled.div`
  ${sharedStyles}
  background-image: url(${backgroundRules});
`;

export const RulesDiv = styled.div`
  ${sharedStyles}
  background-image: url(${backgroundSettings});
`;

export const HomeDiv = styled.div`
  ${sharedStyles}
  background-image: url(${backgroundHome});
`;

export const GameGrid = styled.div`
  background-image: url(${backgroundHome});
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 2fr));
  grid-gap: 0.5rem;
`;

export const NavP = styled.p`
  button:hover {
    font-size: 1.5rem;
    color: #a383ff;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background: none;
  }
  button {
    align-self: center;
    text-align: center;
    padding-right: 1rem;
    font-size: 1.3rem;
    background: none;
    border: none;
    color: white;
  }

  align-self: center;
`;

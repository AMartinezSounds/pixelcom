import styled from "styled-components";

export const AppLayout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .picker-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .custom-input {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 8px;
  }

  .text {
    color: white;
    font-weight: bold;
  }
  @media (min-width: 1280px) {
    margin-left: 96px;
    margin-right: 96px;
  }
  @media (min-width: 1536px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1486px;
  }
`;

export const SelectorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    color: white;
    font-weight: bold;
  }
  .select {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 8px;
  }
`;

export const SlotSetStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 96px;
`;

export const SlotStyle = styled.div`
  background-color: white;
  border-radius: 25px;
  padding: 20px;
  .time-and-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .start-time {
    font-weight: bold;
  }
`;

export const FetchScreenStyle = styled.div`
  background-color: #3d3d3d;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EngineStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 180px;
  height: 150px;
`;

export const Engine1 = styled.div`
  position: absolute;
  top: 0px;
  left: 48px;
  animation-name: rotation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  transform: rotate(0);
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const Engine2 = styled.div`
  position: absolute;
  top: 26px;
  right: 48px;
  animation-name: rotation2;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  transform: rotate(0);
  @keyframes rotation2 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-1turn);
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 100px;
  color: white;
  font-weight: bold;
`;

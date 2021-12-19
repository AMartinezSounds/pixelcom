import styled from "styled-components";

export const AppLayout = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
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
    width: 12.5rem;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .text {
    color: white;
    font-weight: bold;
  }
  @media (min-width: 1280px) {
    margin-left: 6rem;
    margin-right: 6rem;
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
    width: 12.5rem;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const SlotSetStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 3.125rem;
  margin-top: 6rem;
`;

export const SlotStyle = styled.div`
  background-color: white;
  border-radius: 1.563rem;
  padding: 1.25rem;
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
  width: 11.25rem;
  height: 9.375rem;
`;

export const Engine1 = styled.div`
  position: absolute;
  top: 0;
  left: 3rem;
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
  top: 1.625rem;
  right: 3rem;
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
  top: 6.25rem;
  color: white;
  font-weight: bold;
`;

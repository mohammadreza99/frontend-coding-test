import styled from "styled-components";
import { useContext } from "react";
import { TimerContext } from "./App";

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${props => props.theme.text};
  text-align: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.text};
  border-radius: 0.375rem;
  background-color: var(--bs-btn-bg);
  transition: all 0.15s ease-in-out;
  margin-top: 1rem;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    color: ${props => props.theme.backgroundLight};
    background-color: ${props => props.theme.text};
  }
`;
export const Body = ({
  onBtnClick,
}: {
  onBtnClick: () => void;
}): JSX.Element => {
  const timerContext = useContext(TimerContext);

  return (
    <Button
      disabled={timerContext.isStarted}
      onClick={() => {
        onBtnClick();
      }}
    >
      {" "}
      Start Timer{" "}
    </Button>
  );
};

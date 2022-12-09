
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";

const Timer = ({ time }) => {
  time = parseInt(time) * 60 * 1000;
  let navigate = useNavigate();
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return navigate("/");
    } else {
      return (
        <span>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  return (
    <Countdown date={Date.now() + time} renderer={renderer}  />
  );
};

export default Timer;

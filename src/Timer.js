
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";

const Timer = ({ time }) => {
  time = parseInt(time) * 60 * 1000;
  let navigate = useNavigate();
  const renderer = ({ minutes, seconds, completed }) => {
    // let totalTime = (minutes*60 + seconds)*1000
    if (completed) {
      return navigate("/");
    } else {
      // if (time/2 === totalTime) {
      //   setHalfTimeClass(true)
      // }
      return (
        <span>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };
  return (
    <Countdown date={Date.now() + time} renderer={renderer}  />
    // autoStart={false}
  );
};

export default Timer;

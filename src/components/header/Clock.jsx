import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";

const ClockWrapper = styled.div`
  align-self: center;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  max-width: 60px;
  padding: 3px;
  margin-right: 3px;
`;

const Clock = () => {
  const [updateClock, setUpdateClock] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => setUpdateClock(!updateClock), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return <ClockWrapper>{format(new Date(), "HH:mm:ss")}</ClockWrapper>;
};

export default Clock;

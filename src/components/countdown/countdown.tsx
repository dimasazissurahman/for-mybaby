import { Button } from 'components/button/button.common';
import { TodoContext } from 'context/context';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCountdown } from './useCountdown.hooks';

export const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const { setTodos } = useContext(TodoContext);
  const [renderPage, setRenderPage] = useState<any>();

  useEffect(() => {
    if (days + hours + minutes + seconds <= 0) {
      setTodos({ status: true });
      setRenderPage(<ExpiredNotice />);
    } else {
      setRenderPage(<ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />);
    }
  }, [days, hours, minutes, seconds, setTodos]);

  return (<>{renderPage}</>);
};

const ExpiredNotice = () => {
  return (
    <Card style={{ textAlign: "center" }} className="m-2">
      <Card.Header style={{ justifyContent: "center" }}>
        <h3 style={{ color: "GrayText" }}>Happy Birthday 🥳🥳💕</h3>
      </Card.Header>
      <Card.Footer>
        <Link to="/home">
          <Button>Yuk, Dibuka</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  );
};
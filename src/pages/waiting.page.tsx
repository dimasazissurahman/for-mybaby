import { CountdownTimer } from 'components/countdown/countdown'
import React from 'react'

const WaitingPage = () => {
  const deadline = new Date(Date.parse('12 April 2022 23:59:59 GMT+7'));
  const DEADLINE_IN_MS = deadline.getTime();

  const now = new Date().getTime();

  const dateTimeAfterThreeDays = DEADLINE_IN_MS;
  return (
    <>
      <CountdownTimer targetDate={now} />
    </>
  )
}

export default WaitingPage
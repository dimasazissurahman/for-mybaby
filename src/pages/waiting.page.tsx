import { CountdownTimer } from 'components/countdown/countdown'
import React from 'react'

const WaitingPage = () => {
  const deadline = new Date(Date.parse('13 April 2022 00:00:00 GMT'));
  const DEADLINE_IN_MS = deadline.getTime();

  const now = new Date().getTime();

  const dateTimeAfterThreeDays = DEADLINE_IN_MS;
  return (
    <>
      <CountdownTimer targetDate={DEADLINE_IN_MS} />
    </>
  )
}

export default WaitingPage
import { CountdownTimer } from 'components/countdown/countdown'
import React from 'react'

const WaitingPage = () => {
  const deadline = new Date(Date.parse('24 April 2022 17:53:00 GMT+7'));
  const DEADLINE_IN_MS = deadline.getTime();

  const now = new Date().getTime();

  const dateTimeAfterThreeDays = DEADLINE_IN_MS;
  return (
    <>
      <CountdownTimer targetDate={deadline} />
    </>
  )
}

export default WaitingPage
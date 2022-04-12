import React, { Fragment, useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CountdownTimer } from 'components/countdown/countdown';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from 'pages/home.page';
import { HeaderComponent } from 'components/header/layout-header.component';
import WaitingPage from 'pages/waiting.page';
import { TodoContext } from 'context/context';

const LayoutRouter = (props: any) => {
  return (
    <>
      <HeaderComponent />
      <div className="p-1">
        {props.children}
      </div>
    </>
  )
}

const getElement = (data: any, auth: any) => {
  console.log(auth);
  return auth?.status === true ? (
    data.element
  ) : (
    <Navigate to="/waiting-room" />
  );
};


function App() {
  const { todos, setTodos } = useContext(TodoContext);
  console.log(todos);

  return (
    <Fragment>
      <Router>
        <LayoutRouter>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/waiting-room" element={<WaitingPage />} />
            {routes?.map((data: any, i: number) => (
              <Route
                key={i}
                path={data.path}
                element={getElement(data, todos)}
              />
            ))}
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="*" element={<WaitingPage />} />
          </Routes>
        </LayoutRouter>
      </Router>
    </Fragment>
  );
}

export const routes = [
  {
    path: "/home",
    element: <HomePage />,
    status: false,
  },
]

export default App;

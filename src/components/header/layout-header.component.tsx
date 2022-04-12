import { Button } from 'components/button/button.common';
import { TodoContext } from 'context/context';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const HeaderComponent = () => {
  const { todos } = useContext(TodoContext);
  return (
    <header className={styles['header']}>
      <div className={styles['header-content']}>
        <div className={styles['header-left']}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            {/* <h3>Tru<span style={{ color: "#00d6cb" }}>Trip</span></h3> */}
            {todos?.status === true ?
            <h3>Happy Birthday</h3> :
            <h4>Tunggu Dulu Yaaa 🤪🤗😝</h4>
            }
          </Link>
        </div>
      </div>
    </header>
  )
}

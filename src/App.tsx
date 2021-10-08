import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <h1>机器人购物平台</h1>
            </div>
            <div className={styles.robotList}>
                {robots.map(r => <Robot id={r.id} name={r.name} email={r.email}/>)}
            </div>
        </div>
    );
}

export default App;

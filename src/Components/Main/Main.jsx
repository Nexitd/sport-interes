import React from 'react';
import s from './Main.Module.css'
import MainHeader from './MainHeader/MainHeader';
import Prises from './MainBody/Prises/Prises'

const Main = () => {
    return (
            <div className={s.main}>
                <MainHeader />
                <div className={s.main__body}>
                    <Prises />
                </div>
            </div>
    );
}

export default Main;
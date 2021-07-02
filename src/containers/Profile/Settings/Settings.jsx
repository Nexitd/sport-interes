import React from 'react'
import { Input, Button } from 'antd';
import s from './Settings.module.css'

const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.settings__cont}>
                <h2 className={s.title}>Настройки профиля</h2>

                <div className={s.item}>
                    <Input type='text' placeholder='Введите имя' />
                    <button className={s.edit}>
                        <img src="/assets/images/Settings/edit 9.svg" alt="edit" />
                    </button>
                </div>
                <div className={s.item}>
                    <Input type='text' placeholder='Новый пароль' />
                    <button className={s.edit}>
                        <img src="/assets/images/Settings/edit 9.svg" alt="edit" />
                    </button>
                </div>
                <div className={s.item}>
                    <Input type='password' placeholder='Повторите пароль' />
                    <button className={s.edit}>
                        <img src="/assets/images/Settings/edit 9.svg" alt="edit" />
                    </button>
                </div>
                <Button className={s.settings__change} type="primary" size='large' hoverble shape='round'>
                    Изменить
                </Button>
            </div>
        </div>
    )
}

export default Settings;

import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__container}>
                <div className={s.item}>
                    <img src="/assets/images/Header/logo_sport 1.svg" alt="" />
                    <img src="/assets/images/Footer/image-301.png" alt="" />
                    <img src="/assets/images/Footer/image-302.png" alt="" />
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Спортивный интерес</h3>
                    <ul className={s.footer__list}>
                        <li className={s.list__item}>
                            О проекте
                        </li>
                        <li className={s.list__item}>
                            Правила
                        </li>
                        <li className={s.list__item}>
                            Контакты
                        </li>
                        <li className={s.list__item}>
                            Приложение
                        </li>
                        <li className={s.list__item}>
                            Пользовательное соглашение
                        </li>
                    </ul>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Прогнозы</h3>
                    <ul className={s.footer__list}>
                        <li className={s.list__item}>
                            Прогнозы на футбол
                        </li>
                        <li className={s.list__item}>
                            Прогнозы на хоккей
                        </li>
                        <li className={s.list__item}>
                            Прогнозы на баскетбол
                        </li>
                        <li className={s.list__item}>
                            Прогнозы на Лигу чемпионов
                        </li>
                        <li className={s.list__item}>
                            Прогнозы на Лигу Европы
                        </li>
                    </ul>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Мы в социальных сетях</h3>
                    <img src="/assets/images/Footer/Group 735.svg" alt="" />
                    <img src="/assets/images/Footer/Group 736.svg" alt="" />
                </div>
                <p className={s.text}>© 2020 Прогнозы на спорт</p>
            </div>
        </div>
    )
}

export default Footer;
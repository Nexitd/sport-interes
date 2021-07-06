import s from './Tournir/Tournir.module.css'

export const ToursInfo = [
    {
      predictionScore1: <input type='text' value='' className={s.tour__score} />,
      predictionScore2: <input type='text' value='' className={s.tour__score} />,
      predictBtn: <button className={s.predict}>
                      <img src="/assets/images/TournirCards/Group 78.png" alt=""/>
                  </button>
    },
  ];
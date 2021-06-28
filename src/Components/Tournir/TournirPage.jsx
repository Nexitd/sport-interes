import React from 'react'
import TableScore from '../TableScore/TableScore'
import TournirElements from './Page/TournirElements'
import s from './TournirPage.module.css'

const TournirPage = () => {
    return(
        <div className={s.container}>
            <div>
                <TournirElements />
            </div>
            <div>
                <TableScore />
            </div>
        </div>
    );
}

export default TournirPage;
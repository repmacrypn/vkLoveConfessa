import { useAppSelector } from 'src/hooks/useAppHooks'
import { Name } from 'src/pages/Congrats/Common'
import clownImg from 'src/assets/с.png'
import sign from 'src/assets/sign.png'

import styles from './styles.module.scss'

export const Section = () => {
    const { nameValue1, nameValue2, surnameValue1, surnameValue2 } = useAppSelector(state => state.userData.userData)

    return (
        <section className={styles.data}>
            <div className={styles.match}>
                <img className={styles.img} width={60} alt='clown' src={clownImg} />
                подтверждает, что
                <img className={styles.img} width={60} alt='clown' src={clownImg} />
            </div>
            <div className={styles.content}>
                <Name name={nameValue1 || 'Аноним'} />{' '}
                <Name name={surnameValue1 || 'Секретный'} />
            </div>
            <Name name={'И'} />
            <div>
                <Name name={nameValue2 || 'Аноним'} />{' '}
                <Name name={surnameValue2 || 'Секретный'} />
            </div>
            <div className={styles.title}>
                ВЛЮБЛЕНЫ ДРУГ В ДРУГА
            </div>
            <div className={styles.percentRate}>
                ПРОЦЕНТ СОВМЕСТИМОСТИ: {Math.floor(Math.random() * 101)}%
            </div>
            <img className={styles.sign} width={200} alt='sign' src={sign} />
        </section>
    )
}
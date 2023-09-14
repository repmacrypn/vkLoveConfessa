import { useFormControl } from 'src/hooks/useFormControl'

import { NavButton } from '../NavButton'
import { Input } from '../Input'

import styles from './styles.module.scss'

export const Form = () => {
    const {
        formData,
        handleInputChange,
        handleButtonClick,
    } = useFormControl()

    return (
        <section className={styles.formWrapper}>
            <form className={styles.form}>
                <Input
                    name='nameValue1'
                    value={formData.nameValue1}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
                <Input
                    name='surnameValue1'
                    value={formData.surnameValue1}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
                <Input
                    name='nameValue2'
                    value={formData.nameValue2}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
                <Input
                    name='surnameValue2'
                    value={formData.surnameValue2}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
            </form>
            <NavButton
                className='greetings'
                text='Рассчитаем!'
                callBack={handleButtonClick}
                to='congratulations'
            />
        </section>
    )
}
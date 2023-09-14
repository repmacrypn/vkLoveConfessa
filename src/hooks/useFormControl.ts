import { useState } from 'react'

import { useAppDispatch } from './useAppHooks'
import { saveUserData } from 'src/store/slice/userDataSlice'

import { IFormControlResult } from 'src/components/Form/interface'

export const useFormControl = (): IFormControlResult => {
    const [formData, setFormData] = useState({
        nameValue1: '',
        nameValue2: '',
        surnameValue1: '',
        surnameValue2: '',
    })

    const dispatch = useAppDispatch()

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const fieldName = e.currentTarget.name
        setFormData({ ...formData, [fieldName]: e.currentTarget.value })
    }

    const handleButtonClick = () => {
        dispatch(saveUserData(formData))
    }

    return {
        formData,
        handleInputChange,
        handleButtonClick,
    }
}
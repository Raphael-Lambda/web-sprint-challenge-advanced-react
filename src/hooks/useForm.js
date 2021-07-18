// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialMessage, initialValue) => {
    const [ values, setValues ] = useState(initialValue)
    const [ message, setMessage ] = useState(initialMessage)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setMessage(true)
    }

    return [values, message, handleChanges, handleSubmit]
}

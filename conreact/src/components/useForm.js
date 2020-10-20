import  { useState } from 'react';

const useForm = (initialFieldValues,setCurrentId) => {
    const [values,setValues] = useState(initialFieldValues)
    const [errors,setErrors] = useState({})
    const [openIn,setOpenIn] = useState(false)
    const [textin,settextin] = useState('Create new Contact')
    const [btn,setbtn] = useState("Save")
    
  
    
    const changeHandler = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value}
        )
        // console.log(values)
    }
    const resetForm =() =>{
        setValues(initialFieldValues)
        setErrors({})
        setOpenIn(false)
        settextin('Create new Contact')
        setCurrentId(0)
        setbtn('Save')
    }
    return {
        errors,
        setErrors,
        values,
        setValues,
        changeHandler,
        openIn,
        setOpenIn,
        resetForm,textin,settextin,btn,setbtn

    }
}

export default useForm;
import { useState } from 'react'

const StudentForm = ({onAdd,student}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [form, setForm] = useState('')
    const [form_class, setForm_class] = useState('')

const onSubmit = (e) =>{
    e.preventDefault()
    if(!name){
        alert('Please add student name')
        return
    }
    else if(!email){
        alert('Please add student email')
        return
    }
    else if(!phonenumber){
        alert('Please add student phonenumber')
        return
    }

    else if(!form){
        alert('Please add student form')
        return
    }
    else if(!form_class){
        alert('Please add student class',form)
        return
    }

    onAdd({name,email,phonenumber,form,form_class})
    setName('')
    setEmail('')
    setPhonenumber('')
    setForm('')
    setForm_class('')

}

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <h2> {student !== '' ? 'Update Student Details' :"Add New Student"}</h2>
            <div className = 'form-control'>
                <label>Name</label>
                <input value = {student !== '' ? student.name : name} onChange = {(e) => setName(e.target.value)} type = "text" placeholder = "name" />
            </div>

            <div className = 'form-control'>
                <label>Email</label>
                <input value = {student !== '' ? student.email : email} onChange = {(e) => setEmail(e.target.value)} type = "text" placeholder = "Email" />
            </div>


            <div className = 'form-control'>
                <label>Phonenumber</label>
                <input value = {student !== '' ? student.phonenumber : phonenumber} onChange = {(e) => setPhonenumber(e.target.value)} type = "text" placeholder = "Phonenumber" />
            </div>

            <div className = 'form-control'>
                <label>Form</label>
                <select value = {student !== '' ? student.form : form} onChange = {(e) => setForm(e.target.value)}>
                    <option value="" selected disabled>Choose Form</option>    
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                </select>
            </div>

            <div className = 'form-control'>
                <label>Class</label>
                <select value = {student !== '' ? student.form_class : form_class} onChange = {(e) => setForm_class(e.target.value)}>
                    <option value="" selected disabled>Choose Class</option>    
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>

            <input type = "submit" value = {student !== '' ? 'Update Student Details' :"Add Student"} className = "btn btn-block" />
        </form>
    )
}

export default StudentForm

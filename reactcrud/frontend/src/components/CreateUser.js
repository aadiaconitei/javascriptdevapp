// CreateUser Component for add new user

// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import UserForm from "./UserForm";

// CreateUser Component
const CreateUser = () => {
    const [formValues] =
        useState({ nume: '',prenume:'', email: '', telefon: '' })
    // onSubmit handler
    const onSubmit = userObject => {
        axios.post(
            'http://localhost:3002/users',
            userObject)
            .then(res => {
                if (res.status === 200)
                    alert('User successfully created')
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return user form
    return (
        <UserForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create User
        </UserForm>
    )
}

// Export CreateUser Component
export default CreateUser

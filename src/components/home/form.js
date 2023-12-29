import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {

    const intialValues = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        gender: ""

    }
    const [formdatavalue, setFormdataValue] = useState(intialValues);

    const handleChange = (event) => {
        setFormdataValue((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataValues = new FormData();
        formDataValues.append("firstname", formdatavalue.firstname)
        formDataValues.append("lastname", formdatavalue.lastname)
        formDataValues.append("username", formdatavalue.username)
        formDataValues.append("email", formdatavalue.email)
        formDataValues.append("password", formdatavalue.password)

        // console.log(formdata.password);
        console.log(formDataValues)

        axios
            .post('http://localhost:4001/api/postrequest/', formdatavalue)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error('Error during form submission:', error);
            });

    }
    return (
        <div>
            <div class="lg:m-10">
                <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
                    <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

                    <div class="grid gap-3 md:grid-cols-2">
                        <div>
                            <label class=""> First Name </label>
                            <input type="text" name='firstname' onChange={handleChange} placeholder="Your Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                        <div>
                            <label class=""> Last Name </label>
                            <input type="text" name='lastname' onChange={handleChange} placeholder="Last  Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div>
                        <label class=""> Username </label>
                        <input type="text" name="username" onChange={handleChange} placeholder="Username" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label class=""> Email Address </label>
                        <input type="email" name='email' onChange={handleChange} placeholder="Info@example.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label class=""> Password </label>
                        <input type="password" name='password' onChange={handleChange} placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <button type="button" onClick={handleSubmit} class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Get Started</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Form
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Heading = styled.h1`
    text-align: center;
`

const Form = styled.form`
     margin: auto;
     max-width: 650px;
     text-align: center;
`

const StyledLabel = styled.label`
    display: block;
    margin: auto;
    
`

const StyledInput = styled.input`
    display: block;
    margin: auto;
    
`

export default function CustomerCreatePage() {

    const [formData, setFormData] = useState({})
    const history = useHistory()

    function renderInput(name, label, type) {
        return(
            <div>
                <StyledLabel>{label}</StyledLabel>
                <StyledInput
                type={type || "text"}
                name={name}
                onChange={e => {
                    setFormData({...formData, [e.target.name]: e.target.value}) 
                }}
                />
                <br/>
            </div>
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("WEBB20")

        fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            history.push("/customers")
        })
    }

    return (
        <div>
            <Heading>Create Customer</Heading>
            <Form onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website", "url")}
                <br/>
                <button type="submit">Create Customer</button>
            </Form>
        </div>
    )
}

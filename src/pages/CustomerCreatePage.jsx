import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function CustomerCreatePage() {

    const [formData, setFormData] = useState({})
    const history = useHistory()

    function renderInput(name, label, type) {
        return(
            <div>
                <label>{label}</label>
                <input
                type={type || "text"}
                name={name}
                onChange={e => {
                    setFormData({...formData, [e.target]: e.target.value}) 
                }}
                />
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
            <h1>Create Customer</h1>
            <form onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website", "url")}
                <button type="submit">Create Customer</button>
            </form>
        </div>
    )
}

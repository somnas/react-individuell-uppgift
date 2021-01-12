import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function CustomerUpdatePage(props) {

    const customerId = props.match.params.id    
    const history = useHistory()
    const [formData, setFormData] = useState({})

    useEffect(() => {
        getCustomerItem()
    }, [])

    function getCustomerItem() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("WEBB20")
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            })
            .then(res => res.json())
            .then(data => setFormData(data))
        }

    function renderInput(name, label, type) {
        return(
            <div>
                <label>{label}</label>
                <input
                type={type || "text"}
                name={name}
                value={formData[name]}
                onChange={e => {
                    setFormData({...formData, [e.target]: e.target.value}) 
                }}
                />
            </div>
        )
    }

    function handleOnSubmit() {
                
    }

    return (
        <div>
            <h1>Update Customer</h1>
            <form onSubmit={handleOnSubmit}>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website", "url")}
                <button type="submit">Update Customer</button>
            </form>
        </div>
    )
}

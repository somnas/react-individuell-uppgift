import React from 'react'

export default function CustomerCreatePage() {

    function renderInput(name, label, type) {
        return(
            <div>
                <label>{label}</label>
                <input type={type || "text"} name={name}/>
            </div>
        )
    }
    return (
        <div>
            <h1>Create Customer</h1>
            <form>
                {renderInput("name", "Customer Name")}
                {renderInput("email", "Customer Email", "email")}
                {renderInput("organisationNr", "Organisation Number")}
                {renderInput("paymentTerm", "Payment Term", "number")}
                {renderInput("phoneNumber", "Phone Number", "tel")}
                {renderInput("reference", "Reference")}
                {renderInput("vatNr", "Vat Number")}
                {renderInput("website", "Website", "url")}
            </form>
        </div>
    )
}

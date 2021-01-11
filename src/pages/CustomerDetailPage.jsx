import React, {useState, useEffect} from 'react'

export default function CustomerDetailPage(props) {

    const customerId = props.match.params.id
    const [customerItem, setCustomerItem] = useState({})

    useEffect(() => {
        return getCustomerItem()
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
            .then(data => setCustomerItem(data.results))
            }
    
    return (
        <div>
            <h1>Customer Detail Page</h1>
        </div>
    )
}

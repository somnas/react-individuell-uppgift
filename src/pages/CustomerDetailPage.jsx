import React, {useState, useEffect} from 'react'

export default function CustomerDetailPage(props) {

    const customerId = props.match.params.id
    const [customerItem, setCustomerItem] = useState(null)

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
            .then(data => setCustomerItem(data))
            }
    
    return (
        <div>            
            {customerItem
            ? (
                <p>Data inladdat</p>
            )
            :
            (
                <p>Laddar data</p>
            )
            }
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


export default function CustomerDetailPage(props) {

    const customerId = props.match.params.id
    const [customerItem, setCustomerItem] = useState(null)
    const history = useHistory()

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
            .then(data => setCustomerItem(data))
        }

    function deleteCustomer() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("WEBB20")
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => history.push("/customers"))
    }
    
    return (
        <div>            
            {customerItem
            ? (
                <div>
                    <h1>{customerItem.name}</h1>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>{customerItem.email}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>{customerItem.website}</td>
                        </tr>
                    </table>
                    <button onClick={deleteCustomer}>Delete Customer</button>
                </div>                
            )
            :
            (
                <p>Laddar data</p>
            )
            }
        </div>
    )
}

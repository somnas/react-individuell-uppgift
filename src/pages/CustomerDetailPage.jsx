import React, {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'


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
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{customerItem.email}</td>
                            </tr>
                            <tr>
                                <td>Phone number</td>
                                <td>{customerItem.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td>Website</td>
                                <td>{customerItem.website}</td>
                            </tr>
                            <tr>
                                <td>Company number</td>
                                <td>{customerItem.organisationNr}</td>
                            </tr>
                            <tr>
                                <td>VAT number</td>
                                <td>{customerItem.vatNr}</td>
                            </tr>
                            <tr>
                                <td>Payment term</td>
                                <td>{customerItem.paymentTerm}</td>
                            </tr>
                            <tr>
                                <td>Reference</td>
                                <td>{customerItem.reference}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/customers/${customerId}/edit`}><button>Edit Customer</button></Link>
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

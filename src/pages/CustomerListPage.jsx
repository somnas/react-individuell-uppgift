import React, {useState, useEffect} from 'react'

export default function CustomerListPage() {

    const [customerList, setCustomerList] = useState([]) 

    useEffect(() => {
        return getCustomerList()
    }, [])

    function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => setCustomerList(data.results))
  }

    return (
        <div>            
            {customerList.map(item => {
                return <p key={item.id}>{item.name}</p>
            })}
        </div>
    )
}

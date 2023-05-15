
import ContactCard from "./ContactCard";

const contactDetail=[
   
    

    {
        Name:"Harshvardhan Gaikwad",
        Location:"Juna Bajar",
        price:"Rs.1200/-",
        button:"Place Order"
    },
    
    {
        Name:"MAyank Diwate",
        Location:"Juna Bajar",
        price:"Rs.1200/-",
        button:"Place Order"
    },
    
    {
        Name:"Harshvardhan Gaikwad",
        Location:"Juna Bajar",
        price:"Rs.1200/-",
        button:"Place Order"
    },
    
    {
        Name:"Aniket Bidgar",
        Location:"Juna Bajar",
        price:"Rs.1200/-",
        button:"Place Order"
    },
    
    {
        Name:" Ritesh Gadre",
        Location:"Juna Bajar",
        price:"Rs.1200/-",
        button:"Place Order"
    },
    
]
    function ContactList() {
    return (
        <div className="row mx-4">
            
            {
                contactDetail.map((data)=><ContactCard contactData={data}/>)


            }
        </div>
    );
}

export default ContactList;
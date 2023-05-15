// import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';

// function ContactCard({contactData}) {

//   return (
//     <div className='col-md-3 my-3 lh-sm '>
      
//       <Card>
//         <Card.Header ><h5>{contactData.bookName}</h5></Card.Header>
//         <Card.Body>
//           <blockquote className="blockquote mb-0">
//             <p>
//             {v.bookCity}
//             </p>
//             <footer className='h6'>
//              Publication : <cite title="Source Title" className='fs-sm'>{contactData.bookPubliser} </cite><br/>
//              Original Price : <cite title="Source Title" className='' >&#x20B9;{contactData.bookPrice} </cite>
//             </footer>
//             <Button className=' mt-3 ' >{contactData.button}</Button>
            
//           </blockquote>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default ContactCard;

import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBBtn
// } from 'mdb-react-ui-kit';

function ContactCard({contactData}) {
  return (
    
    //   <MDBCard alignment='center' className='col-md-2 m-3'>
    //     <MDBCardBody>
    //       <MDBCardTitle className='h5'>{contactData.Name}</MDBCardTitle>
    //         <MDBCardText>{contactData.Location}</MDBCardText>
    //       <MDBBtn href='#'>{contactData.button}</MDBBtn>
    //     </MDBCardBody>
    //   </MDBCard>
    <div class="card text-center col-md-2 m-3">
  
  <div class="card-body" >
    <h5 class="card-title">{contactData.Name}</h5>
    <p class="card-text">{contactData.Location}</p>
    <p>{contactData.price}</p>
    <button class="btn btn-primary">{contactData.button}</button>
  </div>
  
</div>

  );
}

export default ContactCard;

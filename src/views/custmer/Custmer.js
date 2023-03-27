import React from 'react';

import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

const Custmer = () => {
 
  function testClickEvent(param) {
    alert('Row Click Event');
  }

  const data = () => {
    return {

      
               columns: [
        {
          label: 'FirstName',
          field: 'firstname',
          width: 150,
        
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'FirstName',
          },
        },
        {
          label: 'LastName',
          field: 'lastname',
          width: 270,
        },
        {
          label: 'Email',
          field: 'email',
          width: 200,
        },
        {
          label: 'Mobile',
          field: 'mobile',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Satus',
          field: 'satus',
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: [
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
          clickEvent: () => testClickEvent(1),
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sajan',
          lastname: 'Kumar',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Ravi',
          lastname: 'Kumar',
          email: 'ravikumar@gmail.com',
          mobile: '8106056523',
          date: '2011/04/26',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          
          firstname: 'Manish',
          lastname: 'kumar',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'pavitra',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
         
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
        {
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },

        {
          
          firstname: 'Sandhya',
          lastname: 'Muttaluru',
          email: 'sandhyamuttaluru33@gmail.com',
          mobile: '8106056523',
          date: '2011/04/25',
          satus: 'active',
        },
      ],
    };
  };
  return (
    <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            striped
            bordered
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={data()}
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Custmer;
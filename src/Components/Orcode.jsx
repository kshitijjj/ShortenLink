import React from 'react';

const Orcode = () => {
    
    const handleScan = data => {
        if (data) {
          console.log('Result: ', data);
        }
    }    

    const handleError = err => {
        console.error(err);
      }
    
    return (
       <>
       </>
    );
}

export default Orcode;

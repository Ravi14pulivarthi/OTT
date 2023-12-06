import React from 'react'

function Test2() {
    fetch("./Total.json") 

        .then((res) => { 

        return res.json(); 

    }) 

    .then((data) => console.log(data));
  return (
    <div>Test2</div>
  )
}

export default Test2
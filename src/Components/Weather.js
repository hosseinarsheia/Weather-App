import React from 'react'

const Weather = props =>(
     <div>
         {props.city && props.country && <p>Location{props.city}, {props.country}</p> }
         {props.temepture  && <p>temepture: {props.temepture}</p> }
         {props.humidity  &&  <p>humidity:{props.humidity}</p> }
         {props.description  && <p>conditions:{props.description}</p>}
         {props.error && <p>{props.error}</p>}
     </div>
)



export default Weather
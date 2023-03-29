import React, { memo } from 'react'

const Small = memo(({value}) => {

    console.log("El valor: "+value);

    ////Memo se utiliza para memorizar y evitar que se renderizen los componentes 
    //cada que hay un cambio /
    //Nota esto es solo para los componentes que no tienen cambios 
    
      console.log('Me volvi a generar');
    return (
      <>
        <small>{value}</small>
      </>
    )
  }
)

export default Small

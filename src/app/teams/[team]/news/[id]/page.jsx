import React from 'react'

const page = ({params}) => {
  return (
    <div style={{marginTop:'500px'}}>
      NEWS {params.id}
    </div>
  )
}

export default page

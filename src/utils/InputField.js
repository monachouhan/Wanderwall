import React from 'react'

const InputField = (props) => {
  const { text, para } = props

  return (
    <div style={{ marginTop: '50px',paddingRight:'10px',paddingLeft:'10px' }}>
      <div className='row' >
        <div className='col'>
          <label style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '400', fontSize: '15px', lineHeight: '20px', color: 'black', float: 'left' }}>{text}</label>
        </div>
        <div className='col'>
          <p style={{ color: 'gray', float: 'right', fontSize: '15px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: '300' }}>{para}</p>
        </div>
      </div>

      <input className='inp' style={{ border: 'none', borderBottom: "1px solid gray", width: '100%', outline: 'none', borderColor: 'gray' }}></input>
    </div>
  )
}

export default InputField
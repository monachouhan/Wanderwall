import React from 'react'


const Card = (props) => {
  const { image, textA, textB } = props;

  return (
    <div className="container">
      <div className="row" >
        <div className="col-sm-2" style={{ height: '100px', width: '100px', borderRadius: '15px 0px 0px 15px' }}>
          <img src={image} alt='imagerrr' style={{ height: '100px', width: '100px', borderRadius: '15px 0px 0px 15px' }} />
        </div>
        <div className="col-sm-3" style={{ backgroundColor: 'yellow', height: '100px', width: '300px', borderRadius: '0px 15px 15px 0px' ,flexDirection:'row',display:'flex'}}>
          <div >
            <div>
            <p style={{ paddingTop: '20px' }}>{textA}</p>
            <p style={{ color: 'gray' }}>{textB}</p>
            </div>
            <div>
            <i className="bi bi-three-dots-vertical" style={{float:'right'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
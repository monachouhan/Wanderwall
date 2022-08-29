import React from 'react';

// const Line = (props) => {
//   const { backgroudColor } = props
//   return (
//     <div style={{
//       width: '2px', background: { backgroudColor }, height: '100%', marginLeft: '10px'
//     }}></div>
//   )
// }
const Line = (props) => {
  const { width, height, marginLeft, backgroundColor } = props
  const style1 = { width: width, height: height, marginLeft: marginLeft, backgroundColor: backgroundColor }
  return (
    <div style={{ ...style1 }}></div>
  )
}

export default Line;
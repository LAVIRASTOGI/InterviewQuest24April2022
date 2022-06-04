import React from 'react'

//React Memo works for shallow comparisions

const ReactMemoEaxmple = React.memo((props) => {
    console.log('rendered React Memo Child')
    console.log(props.arrNew)
  return (
    <div>ReactMemoEaxmple {props.name}</div>
  )
});

export default ReactMemoEaxmple
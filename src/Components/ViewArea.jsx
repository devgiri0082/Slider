import React, { useContext } from 'react'
import styled from 'styled-components'
import DataContext from './Context/DataContext'
let Box = styled.div`
  height: 360px;
  width:360px;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 10px;
  position: relative;
`
let SmallBox = styled.div`
    height: 20%;
    width: 20%;
    position: absolute;
    background: white;
    border-radius: 10px;
    top: ${props => `${props.x}px`};
    left: ${props => `${props.y}px`};
    transform: ${props => `rotate(${props.deg}deg)`}
`

export default function ViewArea() {
    let data = useContext(DataContext);
    console.log(data);
    return (
        <Box>
            <SmallBox x={data.xInfo.value} y={data.yInfo.value} deg={data.degInfo.value} >
            </SmallBox>
        </Box>
    )
}

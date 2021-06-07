import React, { useContext } from 'react'
import styled from 'styled-components'
import DataContext from './Context/DataContext';
import EachSlider from './EachSlider'
let Box = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 3%;
`
export default function Slider() {
    let { xInfo, yInfo, degInfo } = useContext(DataContext);
    return (
        <Box>
            <EachSlider text={"X"} value={xInfo} suffix={"px"} max={288} />
            <EachSlider text={"Y"} value={yInfo} suffix={"px"} max={288} />
            <EachSlider text={"Rotate"} value={degInfo} suffix={"deg"} max={360} />
        </Box>
    )
}

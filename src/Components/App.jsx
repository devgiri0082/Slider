import React, { useState } from 'react'
import styled from 'styled-components'
import DataContext from './Context/DataContext'
import Slider from './Slider'
import ViewArea from './ViewArea'
let Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
let SubContainer = styled.div`
    height: 50%;
    width: 60%;
    /* border: 1px solid green; */
    display: flex;
    gap: 30px;
`
export default function App() {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let [deg, setDeg] = useState(0);
    return (
        <DataContext.Provider value={{
            xInfo: { "value": x, "setValue": setX },
            yInfo: { "value": y, "setValue": setY },
            degInfo: { "value": deg, "setValue": setDeg }
        }}>
            <Container>
                <SubContainer>
                    <ViewArea />
                    <Slider />
                </SubContainer>
            </Container>
        </DataContext.Provider>
    )
}

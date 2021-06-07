import React from 'react'
import styled from 'styled-components'
let Box = styled.div`
    display: flex;
    gap: 40px;
    /* justify-content: center; */
    align-items: center;
`
let Text = styled.div`
    color: white;
    font-size: 16px;
`
let Sliding = styled.div`
    width: 100%;
    .slider {
        width: 200px;
        margin-left: 30px;
    }
`
export default function EachSlider({ text, suffix, value, max }) {
    return (
        <Box>
            <Text>
                {text} ({value.value}{suffix})
            </Text>
            <Sliding >
                <input onInput={(e) => setPosition(e)} type="range" min="0" max={max} defaultValue="0" className="slider" />
            </Sliding>
        </Box>
    )
    function setPosition(e) {
        value.setValue(e.target.value);
    }
}

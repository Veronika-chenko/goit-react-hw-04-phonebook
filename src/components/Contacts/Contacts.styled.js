import styled from "styled-components";

export const ContactItem = styled.li`
    padding: 4px 8px;
`

export const ContactDeleteBitton = styled.button`
    padding: 4px 8px;

    color: #000000;
    background-color: #c3d0e3;

    border-radius: 4px;
    border: none;
    box-shadow: 0 4px 10px #0000000d;
    
    transition: color 250ms linear, background-color 250ms linear;
    :hover,
    :focus {
        color: #EDF3FC;
        background-color: #6C8FC4;
    }
`
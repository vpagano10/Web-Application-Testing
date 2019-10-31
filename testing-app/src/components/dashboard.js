import React, { useState } from 'react';
import styled from 'styled-components';

const Board = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    border: 8px solid lightseagreen;
    border-radius: 5px;
`;
const Counts = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Numbers = styled.span`
    font-size: 2rem;
    padding: 2% 20% 2% 20%;
    background-color: black;
    color: white;
`;
const Button = styled.button`
    padding: 2%;
    margin: 2%;
    background-color: transparent;;
    border: 2px solid black;
    border-radius: 5px;
    &:hover {
        background-color: lightseagreen;
    }
`;

function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    function incStrikes() {
        if (strikes >= 2) {
            setStrikes(0)
            setBalls(0)
        } else {
            setStrikes(strikes + 1)
        };
    }
    function fouls() {
        if (strikes >= 2) {
            setStrikes(2)
        } else {
            setStrikes(strikes + 1)
        };
    }
    function incballs() {
        if (balls >= 3) {
            setBalls(0)
            setStrikes(0)
        } else {
            setBalls(balls + 1)
        };
    }

    return (
        <>
            <Board>
                <Counts>
                    <div>
                        <h2>Strikes</h2>
                        <Numbers>{strikes}</Numbers>
                    </div>
                    <div>
                        <h2>Balls</h2>                    
                        <Numbers>{balls}</Numbers>
                    </div>
                </Counts>
                <br />
                <div>
                    <Button onClick={() => {incStrikes()}}>+ Strike</Button>
                    <Button onClick={() => {fouls()}}>+ Foul</Button>
                    <Button onClick={() => {incballs()}}>+ Ball</Button>
                </div>
            </Board>
        </>
    )
}

export default Dashboard;
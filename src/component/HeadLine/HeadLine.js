import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
`

class HeadLine extends Component {
    constructor(props){
        super(props);
    };

    render() {
        const {header, desc} = this.props;
        if(!header){
            return null;
        }
        return (
            <Container data-test="HeadLineContainer">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">{desc}</p>
            </Container>
        )
    }
}

export default HeadLine
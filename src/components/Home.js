import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section title='We build innovative modern design & works' description='View our selection' backgroundImage='https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' leftBtnTxt='Shop' rightBtnTxt='learn more' color='grey' showArrow={true}/>
        <Section title='We prepare for tomorrow, by developing today'
        description='Ezra Joel Group Is an Integrated and diversified business organization. Ezra Joel operates in General Construction & Management Services, Agriculture and in the Renewable Energy Service Industry
        ' backgroundImage='https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80' leftBtnTxt='About us' color='blue'/>
        <Section title='We Construct Your Dream' description='What can we build for you? Learn more about our construction management services' backgroundImage='https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80' leftBtnTxt='Services' color='grey'/>
        <Section title='Green Revolution' description='Clean energy is the answer to climate issues. Moreover, our agriculture initiatives are the answer to mitigating world hunger' backgroundImage='https://images.unsplash.com/photo-1627920769541-daa658ed6b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80' leftBtnTxt='learn more' color='green' />
        <Section title='see it, own it, solve it' description='Improving life and promoting sustainable agricultural infrastructure and empowering entrepreneurial growth through the utilization of available resources' backgroundImage='https://images.unsplash.com/photo-1522600579804-c66aa476298e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80' leftBtnTxt='ezra joel foundation' color='grey' />
        <Section title='Media' description='Catchy paragraph about Ezra Joel Group in the media'
        backgroundImage='https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' leftBtnTxt='View more' color='navy' />
        <Section title='Solar Panels' description='See our selection available for purchase' backgroundImage='https://images.unsplash.com/photo-1491677533189-49af044391ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80' leftBtnTxt='shop' rightBtnTxt='learn more' color='grey' />
    </Container>
  )
}

const Container = styled.div`
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
`

export default Home
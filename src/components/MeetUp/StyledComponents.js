import styled from 'styled-components'

export const Maincontainer=styled.div`
height:100vh;
width:100vw;
background-color:#25262c;
display:flex;
justify-content:center;
align-items:center;
`
export const CenterContainer=styled(Maincontainer)`
height:80vh;
width:60vw;
padding:25px;
background-color:#1b1c22;
`
export const LeftContainer=styled.div`
display:flex;
flex-direction:column;
text-align;center;
color:#fff;
`
export const Heading=styled.h1`
font-size:1.3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Image=styled.img`
height:70vh;
width:30vw;
`
export const RightEditContainer=styled.div`
display:flex;
flex-direction:column;
background-color:#25262c;

`
export const EditToolList=styled.ul`
list-style-type:none;
display:flex;
justify-content:space-evenly;
gap:20px;
width:30vw;
`
export const Button=styled.button`
background-color:transparent;
border:none;
cursor:pointer;
color:${props=>props.color}
`
export const HrElement=styled.hr`
width:99%;

`

export const TextArea=styled.textarea`
width:32vw;
height:62vh;
background-color:#25262c;
border:none;
margin:auto;
color:#fffddd;
font-size:20px;
font-weight:${props=>props.fontWeight};
font-style:${props=>props.fontStyle};
text-decoration:${props=>props.textDecor};
`
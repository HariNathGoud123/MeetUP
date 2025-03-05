import { Component } from "react";
import { VscBold } from "react-icons/vsc";
import { GoItalic } from "react-icons/go";
import { AiOutlineUnderline } from "react-icons/ai";

import { Maincontainer,CenterContainer,Button, LeftContainer ,Heading,Image,RightEditContainer,EditToolList,HrElement,TextArea} from "./StyledComponents";

class MeetUp extends Component{
    state={isBold:false,
        isItalic:false,
        isUnderline:false

    }
    toggleBold=()=>{
        this.setState(pr=>({isBold:!pr.isBold}))
    }
    toggleItalic=()=>{
        this.setState(pr=>({isItalic:!pr.isItalic}))
    }
    toggleUnderLine=()=>{
        this.setState(pr=>({isUnderline:!pr.isUnderline}))
    }
    render(){
        const {isBold,isItalic,isUnderline}=this.state
        const boldColor=isBold?"#faff00":" #f1f5f9";
        const fontWeight=isBold?"bold":"normal";
        const itlaicColor=isItalic?"#faff00":" #f1f5f9";
        const fontStyle=isItalic?"italic":"normal";
        const underlineColor=isUnderline?"#faff00":" #f1f5f9";
        const textDecor=isUnderline?"underline":"normal";
        return(
            <Maincontainer>
            <CenterContainer>
                <LeftContainer>
                    <Heading>Text Editor</Heading>
                    <Image src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png" alt=" text editor"/>
                </LeftContainer>
                <RightEditContainer>
                    <EditToolList>
                        <li key={"bold"}><Button onClick={this.toggleBold} color={boldColor} data-testid="bold"><VscBold size={25}/></Button></li>
                        <li key={"italic"}><Button onClick={this.toggleItalic} color={itlaicColor} data-testid="italic"><GoItalic size={25}/></Button></li>
                        <li key={"underline"}><Button onClick={this.toggleUnderLine} color={underlineColor} data-testid="underline"><AiOutlineUnderline size={25}/></Button></li>
                    </EditToolList>
                    <HrElement/>
                    <TextArea fontWeight={fontWeight} fontStyle={fontStyle} textDecor={textDecor}/>
                </RightEditContainer>
                
            </CenterContainer>
            </Maincontainer>
        )
    }
}
export default MeetUp;
import React from 'react';
import styled from "styled-components";
import {Row, Column} from "../components/basic/Grid"
import {Colors} from "../theme/theme";


const StyledShowcase = styled.div`
    width: 100%;
    position: relative;
    margin: 1rem;
    padding: 3rem 2rem 4rem 2rem;
    border: 3px solid rgba( ${Colors.primaryRGB}, .8);
   
    
    
    ul {
      text-align: center;
    }
   
    ul:last-child {
      //border-left: 2px dotted ${Colors.secondary};
      padding-right:10px;
    }

`



const Preview = styled.a`
    display: inline-block;
    background-image: url(${props => props.src});
    width: 90%;
    height: 7rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
            margin: 0 auto;

    //position:absolute;
    //top:50%;
    //transform: translateY(-50%);
`




const TagContainer = styled.div`
position: absolute;
display: flex;
align-content: space-between;
bottom:5px;
left: 50%;
transform: translateX(-50%);
font-size: 1.5rem;
`
const Tag = styled.div`
    background-color: ${Colors.primary};
    color: ${Colors.white};
    
    margin: 0 3px;
    padding: .5rem;
    border-radius: 3px;
`
const Content = styled.div`
  margin-bottom: 2rem;
`
const Showcase = ({title, children, src, link, tags = []}) => {
    return (
        <StyledShowcase>
                <Preview target={"_blank"} href={link}
                         src={src}>
                </Preview>
                <TagContainer>
                    {tags.map(tag => {
                        return <Tag>{tag}</Tag>
                    })}
                </TagContainer>
<Content>
                {children}
</Content>
        </StyledShowcase>

    )
}

export default Showcase
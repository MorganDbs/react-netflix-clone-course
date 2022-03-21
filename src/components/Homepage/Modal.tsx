import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Wrapper = styled.div `
  position:absolute;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
 
  width:100%;
  min-height:100%; 
`;

//  background-color: rgba(20,20,20,0.5);

type Props = {
    modalOpen : boolean
}

const Modal: React.FC<Props> = ({modalOpen,children}) => {

if (!modalOpen) return null;
 return createPortal(
     <div className="wrapper">
         <Wrapper>
        <div className="modal">
            {children}
        </div>
    </Wrapper>
     </div>
    ,
    document.body
 );

}

export default Modal;
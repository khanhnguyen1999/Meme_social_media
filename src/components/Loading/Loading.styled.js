import styled from 'styled-components'
export const StyledLoadingContainer =  styled.div`
    position:fixed;
    z-index:1000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    ${(props)=>(
        props.isLoading?`opacity:1;visibility:visible`:`opacity:0;visibility:hidden`
    )};
    transition: all 0.3s ease;
    background-color:#fff;
`
export const StyledSVG = styled.svg`
    margin:auto;
    width:150px;
    height:150px;
    /* background:rgb(241, 242, 243); */
    display:block
`
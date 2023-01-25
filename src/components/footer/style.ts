import styled from "styled-components";



export const Container = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
margin-top: 6rem;
border: 1px solid #E8E8E8;

div{
  display: flex;
  align-items: center;
  gap: 0.500rem;
  h1{
   font-weight: 700;
   font-size: 1rem;
   line-height: 19px;
   color: #000000;
  }
  p{
     line-height: 19px;
      font-size: 1rem;
  }
}
ul{
  display: flex;
  align-items: center;
  gap: 1.875rem;

}

`
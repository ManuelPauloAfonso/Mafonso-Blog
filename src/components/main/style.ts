import styled from "styled-components";


export const Container = styled.section`
display: flex;
justify-content: center;
margin-top: 2rem;

.card1{
background: #FFFFFF;
border: 1px solid #E2E2E2;
box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
border-radius: 5px;
padding: 2rem;
}
.card2{
  border-radius: 5px;
}
h3{
  font-size: 1.875rem;
  line-height: 36px;
  color: #2D3748;
}
p{
  color: #718096;
  font-size: 0.875rem;
  line-height: 17px;
  max-width: 25rem;
  margin-top: 2rem;
}
.link{
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  span{
    font-size: 0.75rem;
    line-height: 15px;
    color: #718096;
  }
  a{
    font-size: 0.75rem;
    line-height: 15px;
    color: #2D3748;
    font-weight: 700;
  }
}
`
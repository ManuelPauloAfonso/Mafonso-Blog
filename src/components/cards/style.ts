import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 18.75rem 18.75rem 18.75rem;
    gap: 2.063rem;
    justify-content: center;
    margin-top: 2.688rem;

.card1{
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
  border-radius: 5px;
  img{
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(192, 189, 189, 0.25);
      background: #FFFFFF;


  }
  div{
    padding: 0.500rem;
  }
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
  max-width: 20rem;
  margin-top: 1rem;
}
.link{
  display: flex;
  margin-top: 1rem;
  gap: 6.563rem;
 
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
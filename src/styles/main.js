import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  text-align: left;
`;

export const TD = styled.td`
  padding: 5px;
  border-bottom: 1px solid rgba(0,0,0,.3);
  :hover {
    cursor: ${props => props.interactive ? 'pointer' : 'default'}
  }
`;

export const TH = styled.th`
  padding: 5px 5px 10px;
  border-bottom: 2px solid rgba(0,0,0,.5);
`;

export const Label = styled.label`
  min-width: 120px;
  display: inline-block;
`;

export const TextInputForm = styled.section`
  margin: 10px 0;
`;

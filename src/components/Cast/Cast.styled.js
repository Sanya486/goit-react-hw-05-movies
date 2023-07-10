import styled from "@emotion/styled";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  & div {

    width: calc((100% - 10px * 4) / 5);
  }
`;
import { styled } from "styled-components";

export const LoaderDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04364d;
  position: fixed;
  z-index: 999 !important;
`;
export const LoaderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;
export const LoaderBox = styled.div`
  width: 40px;
  height: 40px;
  animation: spin 3s linear infinite;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const LoaderText = styled.p`
  color: white;
`;

export const LoaderSpan = styled.span`
  height: 8px;
  width: 8px;
  background-color: #fff;
  border-radius: 50%;
`;

export const LoaderSpanBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

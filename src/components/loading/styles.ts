import styled from 'styled-components';

type SpinnerProps = {
  customHeight?: number;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.div<SpinnerProps>`
  border: 5px solid ${({ theme }) => theme.colors.greenLight};
  border-left-color: ${({ theme }) => theme.colors.gray};
  border-radius: 100%;
  height: ${({ customHeight }) => (customHeight ? customHeight : 100)}px;
  width: ${({ customHeight }) => (customHeight ? customHeight : 100)}px;
  animation: loading 2s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-ms-keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

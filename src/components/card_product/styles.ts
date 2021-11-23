import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 39px 0px;
  width: 209px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 32px 32px 0px #00000040;
  filter: drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.25));
  gap: 34px;
  border-radius: 8px;
  z-index: 2;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: 24px;
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const TextButton = styled.small`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

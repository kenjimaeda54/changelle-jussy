import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 16px 16px;
  width: 241px;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 53px;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Description = styled.small`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const SectionFeature = styled.div`
  gap: 3px;
  display: flex;
  flex-direction: column;
`;

export const Feature = styled.small`
  color: ${({ theme }) => theme.colors.darkLight};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const Button = styled.button`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 209px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.greenLight};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const TextButton = styled.small`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

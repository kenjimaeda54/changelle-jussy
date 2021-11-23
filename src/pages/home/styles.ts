import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Left = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 0px 24px;
`;

export const LogoImg = styled.img`
  width: 190px;
  height: 40px;
`;

export const TitleLeft = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Right = styled.div`
  position: relative;
  gap: 32px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
`;

export const Input = styled.input`
  width: 240px;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Search = styled(BsSearch)`
  display: flex;
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.black};
  z-index: 2;
  position: absolute;
  right: 130px;
  top: 13px;
  right: 170px;
`;

export const Cart = styled(AiOutlineShoppingCart)`
  width: 22px;
  height: 17;
  color: ${({ theme }) => theme.colors.black};
`;

export const Section = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 40px 140px;
  background-color: ${({ theme }) => theme.colors.greenLight};
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleSection = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 64px;
  line-height: 77px;
  width: 60%;
`;

export const DescriptionSection = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  width: 30%;
`;

export const ButtonSection = styled.button`
  display: flex;
  width: 181px;
  padding: 12px 0px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ButtonTitleSection = styled.small`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ContainerSectionCard = styled.div`
  position: relative;
  display: flex;
`;

export const ContainerListCardCoffee = styled.div`
  position: relative;
  right: 30px;
  margin-bottom: 20px;
  z-index: 3;
  scale: 1;
`;

export const ContainerListCardFreezer = styled.div`
  position: relative;
  left: 30px;
  margin-top: 120px;
  scale: 0.9;
`;

export const ContainerListCardDrink = styled.div`
  position: relative;
  right: 100px;
  margin-top: 160px;
  scale: 0.9;
  box-shadow: 0px 32px 32px 0px #00000040;
  filter: drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.25));
`;

export const SubSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
  padding: 21px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const TitleSuSection = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Arrow = styled.strong`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Article = styled.div`
  display: flex;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 56px;
  flex-direction: column;
  justify-content: center;
  padding-left: 208px;
  align-items: flex-start;
`;

export const TitleArticle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`;

export const ContainerCardUser = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 24px;
`;

export const ArticleFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const WrapArticleFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 14.5%;
`;

export const TitleWrapFooter = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
`;

export const DescriptionArticleFooter = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonArticleFooter = styled.button`
  display: flex;
  width: 162px;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const TextButtonArticleFooter = styled.small`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const FooterArticlePhoto = styled.div`
  display: flex;
`;

export const ArticleFooterImg = styled.img`
  position: relative;
  left: 310px;
  margin-top: 50px;
  z-index: 2;
`;

export const EffectArticleFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  margin-top: 70px;
  width: 720px;
  height: 648px;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  height: 450px;
`;

export const TitleSectionContact = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  width: 676px;
  text-align: center;
`;

export const SubtileContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 32px;
  gap: 8px;
`;

export const SubTitleContact = styled.small`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const Contatct = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 32px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 436px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const TitleFooter = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  width: 676px;
  text-align: center;
`;

export const WrapFooterInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 502px;
  padding: 18px 0px;
  margin-top: 42px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greenLight};
  background-color: transparent;
`;

export const InputFooter = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TextFooter = styled.strong`
  color: ${({ theme }) => theme.colors.greenLight};
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 108px;
  background-color: ${({ theme }) => theme.colors.black};
`;

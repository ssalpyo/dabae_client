import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ColumnDiv = styled.div`
  width: 240px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: -400px;
  }
`;
export const LogoDiv = styled.div`
  width: 240px;
  height: 100px;
  ${theme.flex.row.center}
  border-bottom: 1px solid #333333;
`;
export const ProfileImgDiv = styled.div`
  height: 120px;
  ${theme.flex.row.center.center}

  img {
    width: 100px;
    aspect-ratio: 1;
  }
`;
export const ProfileNickNameDiv = styled.div`
  height: 40px;
  font-weight: 600;
  ${theme.flex.row.center.center}
`;
export const HostMenuItemDiv = styled.div`
  height: 40px;
  width: 200px;
  ${theme.flex.row.center.center}
  gap: 20px;

  & > img {
    width: 24px;
    aspect-ratio: 1;
  }
`;
export const ColumnDiv2 = styled.div`
  ${theme.flex.column._.start}
  align-self: flex-start;
  width: 100%;
  gap: 10px;
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
  ${theme.flex.row.center.center};
  ${theme.fontSizes.subTitle};
  background-color: ${theme.backgroundColors.primary};
  font-weight: 600;
`;
export const MenuButton = styled.button<{ active?: boolean }>`
  ${theme.flex.row.center.center};
  ${theme.fontSizes.lg};
  font-weight: 600;
  width: 100%;

  & > img {
    padding-right: 20px;
    width: 40px;
    aspect-ratio: 1;
  }

  &:hover {
    background-color: ${theme.backgroundColors.primary};
  }

  background-color: ${(props) =>
    props.active && theme.backgroundColors.primary};
`;
export const SubMenuButton = styled.button<{ active?: boolean }>`
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50%;
    transform: translate(0%, 120%);
    margin-right: 8px;
  }

  ${theme.flex.row._.start}
  ${theme.fontSizes.base};
  font-weight: 600;
  margin-left: 22px;

  &:hover {
    background-color: ${theme.backgroundColors.secondary};
  }

  background-color: ${(props) =>
    props.active && theme.backgroundColors.secondary};
`;
export const DivideRightLine = styled.div`
  border-right: solid ${theme.colors.border} 1px;
  position: fixed;
  left: 240px;
  height: 100vh;

  @media screen and (max-width: 768px) {
    border: 0;
  }
`;

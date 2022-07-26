import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";
import ListProductCardContainer from "../../commons/listproductcard/ListProductCard.container";

export default function ListContainer() {
  // 페이지 네이션 미 구현

  return (
    <Wrapper>
      <ListTitleBox>
        <ListTitle>리스트입니다.</ListTitle>
      </ListTitleBox>
      <ListWrapper>
        <ListProductCardContainer />
      </ListWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const ListTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ListTitle = styled.h2`
  font-weight: bold;
  ${theme.fontSizes.subTitle};
`;

export const ListCount = styled.p`
  margin: 0;
  margin-left: 10px;
  font-weight: 300;
  ${theme.fontSizes.subTitle};
`;

export const MapInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const MapBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MapText = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  font-weight: bold;
`;

export const Img = styled.img``;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin-right: 10px; */
`;
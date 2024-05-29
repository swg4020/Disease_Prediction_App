import { useState } from "react";
import { baseData } from "../../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { listUp } from "../../components/listUp";
import { listUpD } from "../../components/listUpD";
import { InfoItem } from "./InfoItem";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #dbdbdb;
  padding: 20px;
  margin: 0 auto;
`;
const ConWrap = styled.div``;

const Title = styled.h2`
  font-size: 19px;
  margin-bottom: 20px;
`;

export const Home = () => {
  const [diss, setDiss] = useState(1);
  const [sido, setSido] = useState(26);

  const bsasInfo = useQuery({
    queryKey: ["getDissForecastInfo", diss, sido],
    queryFn: baseData,
  });

  const basedata = bsasInfo && bsasInfo?.data?.response?.body?.items;
  console.log(basedata);
  const info = listUp.filter((res) => res.id == sido);
  const infoD = listUpD.filter((res) => res.id === diss);
  const titleInfo = info[0].title;
  const titleDInfo = infoD[0].title;
  console.log(titleInfo);
  console.log(titleDInfo);

  return (
    <Container>
      <ConWrap>
        <Title>질병 예측 정보</Title>
        <InfoItem dissinfo={1} sidoinfo={11} />
        <InfoItem dissinfo={2} sidoinfo={11} />
        <InfoItem dissinfo={3} sidoinfo={11} />
        <InfoItem dissinfo={4} sidoinfo={11} />
        <InfoItem dissinfo={5} sidoinfo={11} />
        <InfoItem dissinfo={15} sidoinfo={11} />
      </ConWrap>
    </Container>
  );
};

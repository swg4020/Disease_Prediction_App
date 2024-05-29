import { useQuery } from "@tanstack/react-query";
import { baseData } from "../../api";
import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { listUpD } from "../../components/listUpD";
import { listUp } from "../../components/listUp";

export const InfoItem = ({dissinfo,sidoinfo}) => {
  const [diss, setDiss] = useState(dissinfo);
  const [sido, setSido] = useState(sidoinfo);

  const bsasInfo = useQuery({
    queryKey: ["getDissForecastInfo", diss, sido],
    queryFn: baseData,
  });

  const basedata = bsasInfo && bsasInfo?.data?.response?.body?.items;
  const info = listUp.filter((res) => res.id == sido);
  const infoD = listUpD.filter((res) => res.id === diss);
  const titleInfo = info[0].title;
  const titleDInfo = infoD[0].title;
  return (
    <>
      {basedata && (
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg={"gray"}
                color={"white"}
                h={"80px"}
                _expanded={{ bg: "tomato", color: "white" }}
              >
                <Box
                  as="span"
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  textAlign="left"
                  w={"100%"}
                >
                  <Box>{titleInfo}</Box>
                  <Box>예측질병 : {titleDInfo}</Box>
                  <Box>예측일자 : {basedata[0].dt}</Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel bg={"white"}>
              <p>질병 예측 진료건수 : {basedata[0].cnt}</p>
              <p>질병 예측 위험도 : {basedata[0].risk}등급</p>
              <p>질병 위험도에 따른 행동요령</p>
              <p>{basedata[0].dissRiskXpln}</p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
};

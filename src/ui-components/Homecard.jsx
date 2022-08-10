/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Homecard(props) {
  const { MI, overrides, ...rest } = props;
  return (
    <Flex
      gap="34px"
      direction="column"
      width="640px"
      height="818px"
      overflow="hidden"
      position="relative"
      borderRadius="45px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homecard")}
    >
      <Image
        width="640px"
        height="480px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={MI?.Image_Name}
        {...getOverrideProps(overrides, "2022-08-03+13_39_24 1")}
      ></Image>
      <View
        width="640px"
        height="247px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 9")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="360px"
          height="66px"
          position="absolute"
          top="89px"
          left="280px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={MI?.Med_Time}
          {...getOverrideProps(overrides, "Description5")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="360px"
          height="153px"
          position="absolute"
          top="94px"
          left="280px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={MI?.Results}
          {...getOverrideProps(overrides, "Description4")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(26,188,254,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="613px"
          height="51px"
          position="absolute"
          top="196px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Blue:"}${MI?.Med_Blue}`}
          {...getOverrideProps(overrides, "Description3")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(214,193,7,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="613px"
          height="51px"
          position="absolute"
          top="145px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Yellow:"}${MI?.Med_Yellow}`}
          {...getOverrideProps(overrides, "Description2")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(242,78,30,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="613px"
          height="51px"
          position="absolute"
          top="94px"
          left="27px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Red:"}${MI?.Med_Red}`}
          {...getOverrideProps(overrides, "Description1")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="615px"
          height="66px"
          position="absolute"
          top="-1px"
          left="26px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={MI?.Dev_ID}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </Flex>
  );
}

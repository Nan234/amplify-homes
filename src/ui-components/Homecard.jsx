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
  const { home, overrides, ...rest } = props;
  return (
    <Flex
      gap="34px"
      direction="column"
      width="1931px"
      height="1215px"
      overflow="hidden"
      position="relative"
      borderRadius="45px"
      padding="0px 151px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Homecard")}
    >
      <Image
        width="1920px"
        height="777px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "IMG_5391 1")}
      ></Image>
      <View
        width="1920px"
        height="358px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 9")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="56.25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="1922px"
          height="259px"
          position="absolute"
          top="29px"
          left="-1px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "Title")}
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
          justifyContent="flex-start"
          width="1920px"
          height="116px"
          position="absolute"
          top="171px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Price:$"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </View>
    </Flex>
  );
}

import React from "react";
import { Case, ComponentWithConditionProps } from "react-if";
import dynamic from "next/dynamic";
interface Props {
  content: string;
}

export default function Test(props: Props) {
  console.log(props.content, "was rendered");
  return <>{props.content}</>;
}

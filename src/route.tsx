import React from "react";
import { Case, ComponentWithConditionProps } from "react-if";

interface Props extends ComponentWithConditionProps {}

export default function Route(props: Props) {
  return <Case {...props}></Case>;
}

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Case, Switch } from "react-if";

const DynamicComponent = dynamic(() => import("../../src/test-1"), {
  loading: (props) => {
    return <>loading</>;
  },
});
const DynamicComponentTwo = dynamic(() => import("../../src/test-2"), {
  loading: (props) => {
    return <>loading</>;
  },
});

export default function NestingExample() {
  const { query } = useRouter();
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/route/route-1">Route 1</Link>
          </li>
          <li>
            <Link href="/route/route-2">Route 2</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Case condition={query["route-name"]?.[0] === "route-1"}>
            <DynamicComponent content="route-1" />
          </Case>
          <Case condition={query["route-name"]?.[0] === "route-2"}>
            <DynamicComponentTwo content="route-2" />
          </Case>
        </Switch>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const pageName = query["route-name"]?.[0];
  // data fetching based on pageName
  return {
    props: { test: "dataFrom Test 1" },
  };
}

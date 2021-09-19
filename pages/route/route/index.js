import Head from "next/head";
import { getServerSideProps as parentPage } from "../index";
export default function MainTestPage(props) {
  return (
    <div>
      second test page{" "}
      <p>
        <pre>{JSON.stringify(props)}</pre>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const parentProps = await parentPage(context);
  return {
    props: { test2: "dataFrom Test 2", ...parentProps.props },
  };
}

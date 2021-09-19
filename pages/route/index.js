import Head from "next/head";

export default function MainTestPage(props) {
  return (
    <div>
      main test page{" "}
      <p>
        <pre>{JSON.stringify(props)}</pre>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { test: "dataFrom Test 1" },
  };
}

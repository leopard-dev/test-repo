import { getServerSideProps as parentPage } from "../index";
export default function MainTestPage(props) {
  return (
    <div>
      third test page{" "}
      <p>
        <pre>{JSON.stringify(props)}</pre>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const parentProps = await parentPage(context);
  return {
    props: { test3: "dataFrom Test 3", ...parentProps.props },
  };
}

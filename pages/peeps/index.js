import { useState } from "react";
import Layout from "../../components/layout";
import GetForm from "../../components/get-form";
import prisma from "../../lib/prisma";

export async function getServerSideProps() {
  const data = await prisma.person.findMany();
  return {
    props: {
      data,
    },
  };
}

function GetPage({ data }) {
  const people = data.map((peep) => (
    <li key={peep.id}>{`${peep.firstName} ${peep.lastName}`}</li>
  ));

  const [result, setResult] = useState("result");

  return (
    <Layout>
      <h1>List of peeps from a sql database</h1>
      <ul>{people}</ul>
      <GetForm setState={setResult} />
      <p>{result}</p>
    </Layout>
  );
}

export default GetPage;

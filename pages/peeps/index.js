import { useState } from "react";
import Layout from "../../components/layout";
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

  return (
    <Layout>
      <h1>List of peeps from a sql database</h1>
      <ul>{people}</ul>
      <form action="../api/form" method="POST">
        <input type="text" id="first" name="first" placeholder="first name" />
        <input type="text" id="last" name="last" placeholder="last name" />
        <br />
        <button type="submit">find peep</button>
      </form>
    </Layout>
  );
}

export default GetPage;

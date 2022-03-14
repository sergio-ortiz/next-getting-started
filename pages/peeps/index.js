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

async function getPeep(e) {
  e.preventDefault();
  const { first, last } = e.target;

  const response = await fetch("../api/form", {
    method: "POST",
    body: JSON.stringify({
      first: first.value,
      last: last.value,
    }),
  });

  const result = await response.json();

  console.log(result);
}

function GetPage({ data }) {
  const people = data.map((peep) => (
    <li key={peep.id}>{`${peep.firstName} ${peep.lastName}`}</li>
  ));

  return (
    <Layout>
      <h1>List of peeps from a sql database</h1>
      <ul>{people}</ul>
      <form onSubmit={getPeep}>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="first name"
          required
        />
        <input
          type="text"
          id="last"
          name="last"
          placeholder="last name"
          required
        />
        <br />
        <button type="submit">get peep id</button>
      </form>
    </Layout>
  );
}

export default GetPage;

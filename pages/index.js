import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const data = await prisma.person.findMany();
  return {
    props: {
      data,
    },
  };
}

function HomePage({ data }) {
  const people = data.map((peep) => (
    <li key={peep.id}>{`${peep.firstName} ${peep.lastName}`}</li>
  ));

  return (
    <div>
      <h1>List of peeps from a sql database</h1>
      <ul>{people}</ul>
    </div>
  );
}

export default HomePage;

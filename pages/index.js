import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <h1>My CRUD App</h1>
      <p>
        Create, Read, Update, and Delete data from a SQL database. Utilizing
        Next.js framework for building Server-Side-Rendered applications with
        React. In conjunction with Prisma ORM for interacting with SQL databases
        within a Node.js app. Using the auto-generated Prisma Client to fetch
        data at request time via ServerSideProps and in serverless functions via
        api routes.
      </p>
    </Layout>
  );
}

export default HomePage;

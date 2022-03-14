async function getPeep(e) {
  e.preventDefault();
  const { first, last } = e.target;

  const response = await fetch("../api/get-peep-id", {
    method: "POST",
    body: JSON.stringify({
      first: first.value,
      last: last.value,
    }),
  });

  const result = await response.json();

  console.log(result);
}

export default function GetForm() {
  return (
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
  );
}

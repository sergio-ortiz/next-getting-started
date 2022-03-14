import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>app</a>
        </Link>
      </li>
      <li>
        <Link href="/peeps">
          <a>get peeps</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>create peeps</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>update peeps</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>delete peeps</a>
        </Link>
      </li>
    </ul>
  );
}

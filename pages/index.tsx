import type { NextPage } from "next";
import Link from "next/link";
import { listIssues } from "../lib/issue";
import Time from "../components/Time";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = ({ issues }) => {
  return (
    <section>
      <ol className="flex flex-col gap-12">
        {issues.map((issue) => (
          <Link href={`/articles/${issue.number}`}>
          <li className="text-sky-900 cursor-pointer block rounded-lg shadow-md hover:bg-gray-100 shadow-lg max-w-2xl px-8 py-4 bg-white" key={issue.number}>
            <Time dateTime={issue.created_at} />
            {issue.title}
          </li>
          </Link>
        ))}
      </ol>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      issues: await listIssues(),
    },
  };
}

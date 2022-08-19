/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Article {
  id: string;
  title: string;
  created_at: string;
}

export const handler: Handlers<Article[]> = { // ②
  async GET(_, ctx) {
    const articles: Article[] = [
      {
        id: "1",
        title: "Article 1",
        created_at: "2022-06-17T00:00:00.000Z",
      },
      {
        id: "2",
        title: "Article 2",
        created_at: "2022-06-10T00:00:00.000Z",
      },
    ];
    return ctx.render(articles);
  },
};

export default function Home({ data }: PageProps<Article[]>) { // ③
  return (
    <div>
      <Head>
        <title>Fresh Blog</title>
      </Head>
      <div>
        <h1>Fresh Blog</h1>
        <section>
          <h2>Posts</h2>
          <ul>
            {data.map((article) => (
              <li key={article.id}>
                <a href={`articles/${article.id}`}>
                  <h3>{article.title}</h3>
                  <time dateTime={article.created_at}>
                    {article.created_at}
                  </time>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

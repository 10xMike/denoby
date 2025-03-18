import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const posts = await getPosts();
    return ctx.render({ posts });
  },
};

export default function Blog({ data }: PageProps<{ posts: { slug: string; content: string }[] }>) {
  return (
    <div class="px-4 py-8 mx-auto max-w-screen-md">
      <h1 class="text-4xl font-bold">Blog</h1>
      <ul class="mt-6">
        {data.posts.map((post) => (
          <li key={post.slug} class="mb-4">
            <a href={`/blog/${post.slug}`} class="text-blue-500 underline">
              {post.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

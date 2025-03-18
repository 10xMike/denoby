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
    <div class="space-y-6">
      <h1 class="text-4xl font-bold text-center text-gray-800">Blog</h1>
      <ul class="space-y-4">
        {data.posts.map((post) => (
          <li key={post.slug} class="p-4 bg-white shadow-sm rounded-lg">
            <a href={`/blog/${post.slug}`} class="text-lg font-semibold text-blue-600 hover:underline">
              {post.slug.replace("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

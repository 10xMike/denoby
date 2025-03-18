import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { slug } = ctx.params;
    const posts = await getPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) return ctx.renderNotFound();

    return ctx.render({ post });
  },
};

export default function BlogPost({ data }: PageProps<{ post: { slug: string; content: string } }>) {
  return (
    <div class="px-4 py-8 mx-auto max-w-screen-md">
      <h1 class="text-4xl font-bold">{data.post.slug.replace("-", " ")}</h1>
      <p class="mt-4 whitespace-pre-line">{data.post.content}</p>
    </div>
  );
}

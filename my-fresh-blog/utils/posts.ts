import { join } from "https://deno.land/std@0.216.0/path/mod.ts";

export async function getPosts() {
  const files = await Deno.readDir("./posts");
  const posts = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const filePath = join("posts", file.name);
      const text = await Deno.readTextFile(filePath);
      const slug = file.name.replace(".md", "");
      posts.push({ slug, content: text });
    }
  }

  return posts;
}

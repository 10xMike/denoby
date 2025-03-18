import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>my-fresh-blog</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
      <div class="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Navbar */}
      <nav class="w-full bg-green-200 py-4 shadow-md">
        <div class="max-w-screen-md mx-auto flex justify-between px-4">
          <a href="/" class="text-lg font-semibold text-gray-800">My Minimal Blog</a>
          <a href="/blog" class="text-gray-700 hover:text-gray-900">Blog</a>
        </div>
      </nav>

      {/* Contenuto principale */}
      <main class="w-full max-w-screen-md px-4 py-8">
        <Component />
      </main>
    </div>
      </body>
    </html>
  );
}

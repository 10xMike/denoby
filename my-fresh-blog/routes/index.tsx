import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto text-center">
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
      <p class="mt-4">
        <a href="/blog" class="text-blue-500 underline">
          Vai al blog
        </a>
      </p>
    </div>
  );
}

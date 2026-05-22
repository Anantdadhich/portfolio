import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Read my latest thoughts on software engineering, blockchain development, and more.",
};

const BLUR_FADE_DELAY = 0.05;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Sort posts by date descending
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="blog-header">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-block text-green-800 bg-gray-100 dark:bg-white text-background px-3 py-1 text-sm font-semibold">
              My Blog
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Thoughts & Writings
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Where I write about web development, blockchain, and building projects.
            </p>
          </BlurFade>
        </div>
      </section>

      <section id="blog-posts">
        <div className="flex flex-col gap-8 max-w-[650px]">
          {sortedPosts.map((post, id) => (
            <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col space-y-2 group block"
              >
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight group-hover:text-green-600 transition-colors duration-200">
                      {post.metadata.title}
                    </h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-mono whitespace-nowrap ml-4">
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                  </div>
                  {post.metadata.summary && (
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
      
      <section id="back-home">
        <BlurFade delay={BLUR_FADE_DELAY * (5 + sortedPosts.length)}>
          <div className="flex justify-start mt-4">
            <Link href="/" className="text-green-700 hover:text-green-600 underline font-mono text-sm">
              ← Back to home
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogs } from "@/features/data/blogs-data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="py-4 sm:py-6">
      {/* Back Button */}
      <Link
        href="/#blogs"
        className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to blogs
      </Link>

      {/* Cover Image */}
      <div className="relative mb-6 h-56 w-full overflow-hidden rounded-lg sm:h-64 md:h-72 lg:h-80">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {blog.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-medium">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-foreground mb-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
        {blog.title}
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground mb-4 text-base sm:text-lg">
        {blog.subtitle}
      </p>

      {/* Meta */}
      <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-4 text-sm">
        {blog.author && <span className="font-medium">{blog.author}</span>}
        <span className="flex items-center gap-1">
          <Calendar className="size-3.5" />
          {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5" />
          {blog.readTime}
        </span>
      </div>

      <Separator className="mb-8" />

      {/* Content */}
      <div className="space-y-4">
        {blog.content.map((paragraph, index) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="text-foreground mt-8 mb-2 text-xl font-bold sm:text-2xl"
              >
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          return (
            <p
              key={index}
              className="text-foreground/85 text-sm leading-relaxed sm:text-base sm:leading-7"
            >
              {paragraph}
            </p>
          );
        })}
      </div>

      <Separator className="my-8" />

      {/* Footer */}
      <Link
        href="/#blogs"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to all blogs
      </Link>
    </article>
  );
}

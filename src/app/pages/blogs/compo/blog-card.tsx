import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Blog } from "@/features/types/blog";

const BlogCard: React.FC<Blog> = ({
  slug,
  title,
  subtitle,
  description,
  image,
  date,
  readTime,
  tags,
  author,
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="border-border bg-card group flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Blog Image */}
      <div className="relative h-44 w-full overflow-hidden sm:h-48 md:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="mb-1.5 flex items-start justify-between gap-2">
          <h3 className="text-foreground text-base font-semibold leading-snug sm:text-lg">
            {title}
          </h3>
          <ArrowUpRight className="text-primary mt-0.5 size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Subtitle */}
        <p className="text-foreground/70 mb-2 text-sm font-medium">{subtitle}</p>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="border-border mt-auto flex items-center gap-3 border-t pt-3 text-xs">
          <span className="text-muted-foreground flex items-center gap-1">
            <Calendar className="size-3.5" />
            {date}
          </span>
          <span className="text-muted-foreground flex items-center gap-1">
            <Clock className="size-3.5" />
            {readTime}
          </span>
          {author && (
            <span className="text-muted-foreground ml-auto">{author}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

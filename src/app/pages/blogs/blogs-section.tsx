"use client";
import { PenLine } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/features/data/blogs-data";
import BlogCard from "./compo/blog-card";
import SectionHeader from "@/registry/section-header";

const BlogsSection = () => {
  if (blogs.length === 0) return null;

  return (
    <section
      id="blogs"
      className="mt-2 scroll-mt-24 sm:mt-3 sm:scroll-mt-28 md:mt-4 lg:mt-6"
    >
      <SectionHeader
        icon={<PenLine className="size-4 sm:size-5" />}
        label="Blogs"
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <Separator className="my-3 sm:my-4 md:my-5 lg:my-6" />
    </section>
  );
};

export default BlogsSection;

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { getBlogPost, getBlogPosts } from '@/lib/sanity/utils-simple';
import { urlFor } from '@/lib/sanity/image';

export async function generateStaticParams() {
  const posts = await getBlogPosts(true);
  
  return posts?.map((post: any) => ({
    slug: post.slug.current,
  })) || [];
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug, true);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-20 left-6 z-50">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition-all duration-200 text-sm font-medium shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article className="fade-in-up">
            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12 fade-in-up-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={urlFor(post.featuredImage).width(800).height(450).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article className="prose prose-lg dark:prose-invert max-w-none fade-in-up-3">
            {post.content && (
              <PortableText
                value={post.content}
                components={{
                  block: {
                    normal: ({ children }) => <p className="mb-6 leading-relaxed text-foreground">{children}</p>,
                    h1: ({ children }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-5 text-foreground">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">{children}</h3>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                    number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                  },
                  listItem: {
                    bullet: ({ children }) => <li className="text-foreground">{children}</li>,
                    number: ({ children }) => <li className="text-foreground">{children}</li>,
                  },
                  marks: {
                    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    code: ({ children }) => (
                      <code className="px-2 py-1 bg-muted rounded text-sm font-mono text-primary">
                        {children}
                      </code>
                    ),
                  },
                }}
              />
            )}
          </article>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-border fade-in-up-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
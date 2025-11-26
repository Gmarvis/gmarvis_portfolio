import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '@/lib/sanity/utils-simple';
import { urlFor } from '@/lib/sanity/image';

export default async function BlogPage() {
  const blogPosts = await getBlogPosts(true) || [];
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-20 left-6 z-50">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition-all duration-200 text-sm font-medium shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
              Thoughts, insights, and tutorials about web development, technology, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post: any, index: number) => (
                <article
                  key={post._id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage).width(400).height(225).url()}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-6xl opacity-20">📝</div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More Link */}
                    <Link 
                      href={`/blog/${post.slug?.current || post.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
              <p className="text-muted-foreground">
                Create your first blog post in the Sanity Studio!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
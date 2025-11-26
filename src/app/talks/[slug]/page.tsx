import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ArrowLeft, MapPin, ExternalLink, PlayCircle, FileText } from 'lucide-react';

// This will be replaced with actual Sanity data fetching
async function getTalk(slug: string) {
  // Simulate API call - replace with actual Sanity query
  const mockTalk = {
    _id: '1',
    title: 'Building Modern Web Applications with Next.js',
    slug: { current: slug },
    description: 'An in-depth look at building scalable, performant web applications using Next.js 14, covering server components, streaming, and advanced patterns. This talk explores the latest features and best practices for modern React development.',
    event: 'React Conference 2024',
    eventUrl: 'https://reactconf.com',
    date: '2024-10-15',
    slidesUrl: 'https://slides.com/talk1',
    videoUrl: 'https://youtube.com/watch?v=example1',
    coverImage: null,
    content: `
      This talk covered the following key topics:
      
      • Server Components and their benefits
      • Streaming and Suspense patterns
      • Advanced routing techniques
      • Performance optimization strategies
      • Real-world case studies and examples
      
      The presentation was well-received by the audience with great Q&A session covering
      implementation details and best practices for production applications.
    `,
  };

  if (slug !== 'nextjs-modern-web-apps') {
    return null;
  }

  return mockTalk;
}

interface TalkPageProps {
  params: {
    slug: string;
  };
}

export default async function TalkPage({ params }: TalkPageProps) {
  const talk = await getTalk(params.slug);

  if (!talk) {
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
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/talks"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Talks
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{formatDate(talk.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <Link 
                href={talk.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {talk.event}
              </Link>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 fade-in-up">
            {talk.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 fade-in-up-2">
            {talk.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-12">
            {talk.slidesUrl && (
              <Link
                href={talk.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FileText className="h-5 w-5" />
                View Slides
              </Link>
            )}
            
            {talk.videoUrl && (
              <Link
                href={talk.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Video
              </Link>
            )}

            <Link
              href={talk.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              Event Details
            </Link>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {talk.coverImage && (
        <section className="mb-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src={talk.coverImage}
                alt={talk.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
              {talk.content}
            </div>
          </div>

          {/* Event Info Card */}
          <div className="mt-16 p-6 bg-card rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4">Event Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-muted-foreground mb-1">Event</h4>
                <Link 
                  href={talk.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {talk.event}
                </Link>
              </div>
              <div>
                <h4 className="font-medium text-muted-foreground mb-1">Date</h4>
                <p>{formatDate(talk.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  // This will be replaced with actual Sanity query to get all talk slugs
  return [
    { slug: 'nextjs-modern-web-apps' },
    { slug: 'typescript-best-practices' },
  ];
}
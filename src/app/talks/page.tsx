import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin, ExternalLink, PlayCircle, FileText, ArrowLeft } from 'lucide-react';

// This will be replaced with actual Sanity data fetching
const talks = [
  {
    _id: '1',
    title: 'Building Modern Web Applications with Next.js',
    slug: { current: 'nextjs-modern-web-apps' },
    description: 'An in-depth look at building scalable, performant web applications using Next.js 14, covering server components, streaming, and advanced patterns.',
    event: 'React Conference 2024',
    eventUrl: 'https://reactconf.com',
    date: '2024-10-15',
    slidesUrl: 'https://slides.com/talk1',
    videoUrl: 'https://youtube.com/watch?v=example1',
    coverImage: null,
  },
  {
    _id: '2',
    title: 'TypeScript Best Practices for Large Codebases',
    slug: { current: 'typescript-best-practices' },
    description: 'Learn how to effectively use TypeScript in large-scale applications, including advanced types, patterns, and tooling strategies.',
    event: 'TypeScript Meetup Lagos',
    eventUrl: 'https://meetup.com/typescript-lagos',
    date: '2024-09-20',
    slidesUrl: 'https://slides.com/talk2',
    videoUrl: null,
    coverImage: null,
  },
];

export default function TalksPage() {
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
              Talks & Speaking
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up-2">
              Conferences, meetups, and events where I&apos;ve shared knowledge about web development and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {talks.map((talk, index) => (
              <article
                key={talk._id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    {talk.coverImage ? (
                      <Image
                        src={talk.coverImage}
                        alt={talk.title}
                        width={400}
                        height={300}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-48 md:h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="text-6xl opacity-20">🎤</div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
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
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {talk.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {talk.description}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {talk.slidesUrl && (
                        <Link
                          href={talk.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <FileText className="h-4 w-4" />
                          View Slides
                        </Link>
                      )}
                      
                      {talk.videoUrl && (
                        <Link
                          href={talk.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                        >
                          <PlayCircle className="h-4 w-4" />
                          Watch Video
                        </Link>
                      )}

                      <Link
                        href={talk.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Event Details
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {talks.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold mb-2">No talks yet</h3>
              <p className="text-muted-foreground">
                Check back soon for upcoming speaking engagements!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
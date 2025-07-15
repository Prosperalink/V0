'use client';

import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-8">
          Blog Article: {params.slug}
        </h1>
        <p className="text-blue-100">
          This is a placeholder for the blog article content.
        </p>
      </div>
    </main>
  );
}

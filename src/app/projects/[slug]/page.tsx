import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/lib/projects';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import TechBadge from '@/components/TechBadge';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const firstScreenshot = project.screenshots[0] || '/Thumbnail.png';

  return {
    title: `${project.title} - Khalil Ben Cherifa`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://khalilbencherifa.com/projects/${project.slug}`,
      siteName: 'Khalil Ben Cherifa Portfolio',
      images: [
        {
          url: firstScreenshot,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [firstScreenshot],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-sm font-medium text-neutral-500 tracking-wider uppercase mb-6">
            {project.subtitle}
          </p>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-neutral-500 tracking-wider uppercase mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-16">
          <ScreenshotGallery
            screenshots={project.screenshots}
            projectTitle={project.title}
          />
        </div>

        {/* Project Story Sections */}
        <div className="space-y-12">
          {/* Story */}
          <section>
            <h2 className="text-3xl font-bold mb-4">The Story</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.story}
            </p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-4">The Impact</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {project.impact}
            </p>
          </section>
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
                >
                  View Live Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-full hover:border-neutral-400 transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Navigation to other projects */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            View all projects
          </Link>
        </div>
      </article>
    </main>
  );
}

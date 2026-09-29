import { ThemeToggle } from "@/components/theme-toggle";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Saumya Rai
          </a>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted hover:text-foreground">
              About
            </a>
            <a href="#projects" className="text-sm text-muted hover:text-foreground">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-foreground">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-4xl flex-col items-start gap-4 px-6 py-24">
          <p className="text-sm font-medium text-accent">Hi, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Saumya Rai
          </h1>
          <p className="text-xl text-muted">Web3 Developer</p>
          <p className="max-w-xl text-muted">
            I build decentralized applications, smart contracts, and on-chain
            tooling. Welcome to my corner of the internet — take a look
            around.
          </p>
          <a
            href="#projects"
            className="mt-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View my work
          </a>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl text-muted">
            I&apos;m a Web3 developer focused on building secure, user-friendly
            decentralized applications. I work across smart contracts,
            frontend integrations, and on-chain infrastructure.
            {/* Replace this paragraph with your own bio. */}
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-muted">
            More details coming soon — check back as these get finished.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4 pt-2 text-sm">
                  <a href={project.link} className="text-accent hover:underline">
                    Live
                  </a>
                  <a href={project.repo} className="text-accent hover:underline">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-xl text-muted">
            Want to work together or just say hi? Reach out.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:lamba.panda2704@gmail.com"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href="#"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-card"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-card"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} Saumya Rai. Built with Next.js.
        </div>
      </footer>
    </>
  );
}

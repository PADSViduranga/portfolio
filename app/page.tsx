export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center gap-6 px-6 md:px-16">
      <p className="font-mono text-sm text-muted">/ step 2 · theme check</p>

      <h1 className="font-display text-7xl uppercase leading-none md:text-9xl">
        Schema to <span className="text-brand">screen.</span>
      </h1>

      <p className="max-w-xl text-lg text-muted">
        This paragraph should be in Archivo. The headline above should be tall
        and condensed.
      </p>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-full bg-brand px-4 py-2 text-sm font-semibold">
          Brand red
        </span>
        <span className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-sm">
          mono tag
        </span>
      </div>
    </main>
  );
}

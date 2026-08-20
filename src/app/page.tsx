export default function HomePage() {
  return (
    <main>
      <h1>UniMind</h1>
      <p>
        The application foundation is running. Product workflows remain behind
        deterministic mocks until their decisions and review gates pass.
      </p>
      <section aria-labelledby="foundation-status">
        <h2 id="foundation-status">Foundation status</h2>
        <dl>
          <div>
            <dt>Runtime</dt>
            <dd>Node.js application</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>Synthetic only</dd>
          </div>
          <div>
            <dt>Providers</dt>
            <dd>Disabled until approved</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

"use client";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>This page could not load</h1>
      <p>Try the request again. No study data was changed.</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}

export const AI_URL = "https://ai.hiukky.com/";

export function AiDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`ai-dot size-1.5 rounded-full bg-[var(--accent-ai)] ${className}`}
    />
  );
}

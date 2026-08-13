import {
  siBun,
  siDocker,
  siElastic,
  siElasticsearch,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithubactions,
  siGitlab,
  siGraphql,
  siJest,
  siKubernetes,
  siLangchain,
  siLinux,
  siModelcontextprotocol,
  siMongodb,
  siMysql,
  siNeovim,
  siNestjs,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedis,
  siRedux,
  siSass,
  siStorybook,
  siSupabase,
  siTailwindcss,
  siTanstack,
  siTerraform,
  siTurborepo,
  siTypeorm,
  siTypescript,
  siVite,
  siVuedotjs,
  siZod,
} from "simple-icons";

/**
 * Maps skill names (as they appear in messages/*.json stack.categories) to
 * their simple-icons brand glyph, for skills with a real brand mark in the
 * catalog.
 */
const BRAND_ICON_PATHS: Record<string, string> = {
  React: siReact.path,
  TypeScript: siTypescript.path,
  "Next.js": siNextdotjs.path,
  "Tailwind CSS": siTailwindcss.path,
  "Framer Motion": siFramer.path,
  Redux: siRedux.path,
  "TanStack Query": siTanstack.path,
  Vite: siVite.path,
  Storybook: siStorybook.path,
  Vue: siVuedotjs.path,
  Sass: siSass.path,
  "Node.js": siNodedotjs.path,
  NestJS: siNestjs.path,
  Express: siExpress.path,
  GraphQL: siGraphql.path,
  Bun: siBun.path,
  Python: siPython.path,
  PostgreSQL: siPostgresql.path,
  MongoDB: siMongodb.path,
  MySQL: siMysql.path,
  Redis: siRedis.path,
  Prisma: siPrisma.path,
  TypeORM: siTypeorm.path,
  Supabase: siSupabase.path,
  Elasticsearch: siElasticsearch.path,
  Docker: siDocker.path,
  Kubernetes: siKubernetes.path,
  "GitLab CI/CD": siGitlab.path,
  "GitHub Actions": siGithubactions.path,
  Terraform: siTerraform.path,
  Nginx: siNginx.path,
  "Elastic APM": siElastic.path,
  LangChain: siLangchain.path,
  MCP: siModelcontextprotocol.path,
  Git: siGit.path,
  Neovim: siNeovim.path,
  Figma: siFigma.path,
  Linux: siLinux.path,
  Turborepo: siTurborepo.path,
  Jest: siJest.path,
  Zod: siZod.path,
};

/**
 * Skills without a real brand mark in simple-icons — either genuinely
 * conceptual (protocols, AI concepts with no single canonical logo) or a
 * real product whose mark simple-icons has pulled for trademark reasons
 * (AWS, Playwright). These get a generic Phosphor glyph that fits the
 * concept instead of impersonating a mark that isn't theirs to show.
 * Rendered by components/sections/stack-terminal.tsx via this key.
 */
const CONCEPT_ICON_KEYS: Record<string, string> = {
  REST: "ArrowsLeftRight",
  gRPC: "Broadcast",
  AWS: "Cloud",
  Playwright: "TestTube",
  Zustand: "Package",
  LLMs: "Brain",
  RAG: "MagnifyingGlass",
  Agents: "Robot",
  OCR: "TextAa",
  Docling: "FileText",
  Embeddings: "ChartScatter",
};

export type TechIcon =
  | { kind: "brand"; path: string }
  | { kind: "concept"; key: string };

export function getTechIcon(name: string): TechIcon | null {
  const brandPath = BRAND_ICON_PATHS[name];
  if (brandPath) return { kind: "brand", path: brandPath };

  const conceptKey = CONCEPT_ICON_KEYS[name];
  if (conceptKey) return { kind: "concept", key: conceptKey };

  return null;
}

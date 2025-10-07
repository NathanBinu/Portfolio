# Nathan Binu Edappilly — Portfolio

A fast, responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.
It showcases projects, experience, skills, and includes a production-ready contact form that sends emails via Resend.

## ✨ Features

- Modern App Router (Next.js 15) with static generation & dynamic routes (`/projects/[slug]`)
- Responsive layout, dark/light theme toggle, and subtle motion/hover effects
- "Projects" grid with filters + detailed project pages
- "Experience" timeline with skills & technologies
- "About" + "Beyond Code" sections
- Contact form with server route (`/api/contact`) using Resend
- Basic SEO + JSON-LD project structured data

## 🧰 Tech Stack

- **Framework**: Next.js 15, React 18, TypeScript
- **UI**: Tailwind CSS, shadcn/ui (Radix UI), lucide-react
- **Email**: Resend (API route)
- **Tooling**: PostCSS, ESLint, Prettier

## 📁 Project Structure (high level)

\`\`\`
app/
  about/page.tsx
  contact/page.tsx
  experience/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  api/contact/route.ts        # Resend email endpoint
components/
  navigation.tsx
  theme-toggle.tsx
  ui/*                        # shadcn/ui components
lib/
  content.ts                  # Projects/skills/experience content source
  utils.ts
public/
  images, icons, og assets
styles/
  globals.css                 # Tailwind entry
\`\`\`

**Note**: Projects are read from `lib/content.ts` (and optionally `content/projects/*.json` if you split them).
Skills shown on the About/Experience pages are also defined in `lib/content.ts`.

## Getting Started

### Prerequisites

- Node.js ≥ 20.19 (recommended)
- npm ≥ 10

### Install & Run

\`\`\`bash
# install
npm install

# dev
npm run dev

# build & start
npm run build
npm start

# lint / format (optional)
npm run lint
npm run format
\`\`\`

Visit http://localhost:3000.

## 🔐 Environment Variables

Create a `.env.local` in the repo root:

\`\`\`env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resend (email)
RESEND_API_KEY=your_resend_api_key

# Contact settings
EMAIL_TO=you@example.com
EMAIL_FROM="Portfolio Contact <noreply@yourdomain.com>"
\`\`\`

**Important**: Free Resend accounts can only send to your own address until you verify a domain.
To email other recipients:

1. Verify a domain in the Resend dashboard
2. Change `EMAIL_FROM` to use that domain (e.g., `hello@yourdomain.com`)

The contact endpoint lives at `app/api/contact/route.ts`.

## ✏️ Customizing Content

- **Name/brand (header)**: `components/navigation.tsx`
- **Hero / About / Beyond Code**: `app/page.tsx` and `app/about/page.tsx`
- **Skills/Expertise**: update skill arrays in `lib/content.ts`
- **Projects list**: add/edit projects in `lib/content.ts`
  (each item includes `slug`, `title`, `description`, `image`, `technologies`, `category`, `featured`, `githubUrl`, `liveUrl`, `completedAt`, `longDescription`)
- **Project pages**: `app/projects/[slug]/page.tsx` (statically generated via `generateStaticParams`)

## 📨 Contact Form (Resend)

- **UI**: `app/contact/page.tsx`
- **API**: `app/api/contact/route.ts` (validates form, sends via Resend, returns JSON)

### Dev tips

- Keep `EMAIL_TO` as your own address during testing.
- If you see a 403 saying you can only send to your own email, verify a domain in Resend and update `EMAIL_FROM`.

## 🧪 Notes on Next.js 15

Dynamic route params are async in Next 15.
You'll see patterns like:

\`\`\`tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // ...
}
\`\`\`

…and the same in `generateMetadata`.

## 🛫 Deployment (Vercel)

1. Push to GitHub
2. Import repo into Vercel
3. Add Environment Variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `EMAIL_TO`
   - `EMAIL_FROM`
4. Deploy

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework for the Web
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI and Tailwind CSS
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high‑quality design systems
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
- [Resend](https://resend.com/) - Email API for developers

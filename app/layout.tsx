// import { PersonStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@vercel/analytics/next"
// import { GeistMono } from "geist/font/mono"
// import type { Metadata } from "next"
// import { DM_Sans, Space_Grotesk } from "next/font/google"
// import type React from "react"
// import { Suspense } from "react"
// import "./globals.css"

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
//   display: "swap",
// })

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
//   display: "swap",
// })

// export const metadata: Metadata = {
//   title: {
//     default: "Portfolio | Developer & Designer",
//     template: "%s | Portfolio",
//   },
//   description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
//   generator: "Next.js",
//   applicationName: "Portfolio",
//   referrer: "origin-when-cross-origin",
//   keywords: ["portfolio", "developer", "designer", "web development", "projects", "React", "Next.js", "TypeScript"],
//   authors: [{ name: "Alex Johnson", url: "https://portfolio.vercel.app" }],
//   creator: "Alex Johnson",
//   publisher: "Alex Johnson",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://portfolio.vercel.app"),
//   alternates: {
//     canonical: "/",
//     types: {
//       "application/rss+xml": [{ url: "/rss", title: "Portfolio Blog RSS Feed" }],
//     },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://portfolio.vercel.app",
//     title: "Portfolio | Developer & Designer",
//     description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
//     siteName: "Portfolio",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Portfolio - Developer & Designer",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Portfolio | Developer & Designer",
//     description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
//     images: ["/og-image.jpg"],
//     creator: "@alexjohnson",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.jpg",
//     apple: "/apple-touch-icon.jpg",
//   },
//   manifest: "/manifest.json",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <PersonStructuredData
//           name="Alex Johnson"
//           jobTitle="Full Stack Developer"
//           url="https://portfolio.vercel.app"
//           sameAs={[
//             "https://github.com/alexjohnson",
//             "https://linkedin.com/in/alexjohnson",
//             "https://twitter.com/alexjohnson",
//           ]}
//         />
//         <WebsiteStructuredData
//           name="Portfolio"
//           description="Modern portfolio showcasing projects, experience, and insights in web development and design."
//           url="https://portfolio.vercel.app"
//         />
//       </head>
//       <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}>
//         <Suspense>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//             {/* ADDED: site-wide centered container wrapper */}
//             <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
//               {children}
//             </div>
//           </ThemeProvider>
//           <Analytics />
//         </Suspense>
//       </body>
//     </html>
//   )
// }

import { PersonStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { GeistMono } from "geist/font/mono"
import type { Metadata } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Developer & Designer",
    template: "%s | Portfolio",
  },
  description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["portfolio", "developer", "designer", "web development", "projects", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Alex Johnson", url: "https://portfolio.vercel.app" }],
  creator: "Alex Johnson",
  publisher: "Alex Johnson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio.vercel.app"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss", title: "Portfolio Blog RSS Feed" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.vercel.app",
    title: "Portfolio | Developer & Designer",
    description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
    siteName: "Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Portfolio - Developer & Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Developer & Designer",
    description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
    images: ["/og-image.jpg"],
    creator: "@alexjohnson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon-16x16.jpg", apple: "/apple-touch-icon.jpg" },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonStructuredData
          name="Alex Johnson"
          jobTitle="Full Stack Developer"
          url="https://portfolio.vercel.app"
          sameAs={["https://github.com/alexjohnson", "https://linkedin.com/in/alexjohnson", "https://twitter.com/alexjohnson"]}
        />
        <WebsiteStructuredData
          name="Portfolio"
          description="Modern portfolio showcasing projects, experience, and insights in web development and design."
          url="https://portfolio.vercel.app"
        />
      </head>
      <body className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`}>
        <Suspense>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {/* CHANGED: single site-wide container — centers all pages consistently */}
            <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

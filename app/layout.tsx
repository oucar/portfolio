import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.ucaronur.com"),

  title: {
    default: "Onur Ucar | Software Engineer",
    template: "%s | Onur Ucar",
  },

  description:
    "Software Engineer II at Seismic and Purdue CS alumnus. Previously Bastian Solutions & Navient. Building high-performance apps with React/Next.js, TypeScript, C#/.NET, Vue, SQL and more. Explore projects, skills and get in touch.",

  keywords: [
    "Onur Ucar",
    "Software Engineer II",
    "Software Portfolio",
    "Purdue Computer Science",

    "Seismic",
    "Bastian Solutions",
    "Navient",

    "C/C++",
    "C#",
    ".NET",
    "JavaScript",
    "TypeScript",
    "Python",
    "Ruby",
    "NHibernate",
    "Entity Framework",
    "LINQ",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Redux",
    "Vuex",
    "Ruby on Rails",
    "Tailwind CSS",
    "Framer Motion",
    "i18next",
    "SWR",
    "Jest",
    "RSpec",
    "MSW",
    "React Testing Library",
    "SQL",
    "MongoDB",
    "PostgreSQL",
  ],

  authors: { name: "Onur Ucar", url: "https://www.ucaronur.com" },

  openGraph: {
    type: "website",
    url: "https://www.ucaronur.com",
    siteName: "ucaronur.com",
    title: "Onur Ucar | Senior Software Engineer",
    description:
      "Browse projects, experience and skills of Onur Ucar — Purdue CS grad engineering scalable apps with React/Next.js, TypeScript, and .NET.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of ucaronur.com portfolio home page",
      },
    ],
  },

  alternates: {
    canonical: "https://www.ucaronur.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* backgrounds represent light start and dark end */}
        <div className="bg-[#2980B9] absolute top-[-6rem] z-10 right-[3rem] sm:right-[11rem] h-[20rem] sm:h-[31.25rem]  w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:dark:bg-[#0a0e2c] dark:bg-[#f83600]"></div>
        {/* background represent light end and dark start  */}
        <div className="bg-[#6DD5FA] absolute top-[-1rem] z-10 left-[-35rem] sm:left-[-35rem] h-[20rem] sm:h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] sm:dark:bg-[#f17d25] dark:bg-[#fe8c00]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

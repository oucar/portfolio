import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { TracingBeam } from "@/components/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onur Ucar | Personal Portfolio",
  description:
    "Personal Portfolio of Onur Ucar, Purdue School of Science alumni.",
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
            <TracingBeam>
              <Header />
              {children}
              <Footer />
            </TracingBeam>

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

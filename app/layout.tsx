import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vansh Talwar",
  description:
    "Vansh Talwar - Full Stack Developer building fast, scalable, and user-focused web apps using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* Chatbase Loader */}
          <Script id="chatbase-script" strategy="afterInteractive">
            {`
            (function(){
              if(!window.chatbase || window.chatbase("getState") !== "initialized"){
                window.chatbase = (...arguments) => {
                  if(!window.chatbase.q){ window.chatbase.q = [] }
                  window.chatbase.q.push(arguments)
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop){
                    if(prop === "q"){ return target.q }
                    return (...args) => target(prop, ...args)
                  }
                })
              }

              const onLoad = function(){
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "LBcZPr-E7tx8IoLT0eO5B"; // 👈 YOUR ID
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };

              if(document.readyState === "complete"){
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}

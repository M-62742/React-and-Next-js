// app/layout.js or app/root-layout.js
"use client";

import "./globals.css";
import Loginpage from "@/Components/Loginpage";  // Ensure the path is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, title, etc. */}
      </head>
      <body>
        <Loginpage />
        {children}
      </body>
    </html>
  );
}

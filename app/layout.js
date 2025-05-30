import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "find-reservations.com | Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>

<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16966386136"></script>
<script>
    {1`window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());

  gtag('config', 'AW-16966386136');`}
</script>
 
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}

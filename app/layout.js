import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "find-reservations.com | Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
  <script>
  {`gtag('event', 'conversion', {
'send_to': 'AW-11518798365/NJHwCMaU_coaEJ3Uy_Qq',
'value': 1.0,
'currency': 'USD'
});`}
</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11518798365"></script>
<script>
{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11518798365');`}

</script>
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

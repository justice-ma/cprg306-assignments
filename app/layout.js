import "./globals.css";

export const metadata = {
  title: "Web Dev 2 Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

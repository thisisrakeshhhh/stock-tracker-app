import React from 'react'
// import './globals.css'
import Header from '@/components/Header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-10">{children}</div>
      </main>
    </div>
  );
}

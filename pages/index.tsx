import React from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>REI | angelslanding-v2</title>
        <meta name="description" content="A tribute to Rei Ayanami – enigmatic, silent, and irreplaceable." />
        <link rel="icon" href="/rei-eyes.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#cfdfff] via-white to-[#e6e6e6] text-gray-800 font-sans">
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <img src="/rei-main.jpg" alt="Rei Ayanami" className="w-48 h-auto mb-6 drop-shadow-xl rounded-full" />

          <h1 className="text-5xl font-light tracking-wide mb-4 text-[#6aa9ff]">
            First Child: Rei Ayanami
          </h1>

          <p className="max-w-xl text-lg text-gray-600 mb-6 italic">
            "I am neither a doll nor a human... I am me."
          </p>

          <Button className="bg-[#6aa9ff] hover:bg-[#5b96e6] text-white px-6 py-3 rounded-xl text-lg shadow-lg">
            Initiate Synchronization
          </Button>
        </section>

        <section className="mt-20 px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl text-gray-700 mb-4">Project Overview</h2>
          <p className="text-gray-500">
            This project is a dedication to Rei Ayanami – pilot of Evangelion Unit-00.
            A quiet soul molded by duty and identity, framed in EVA-blue.
            Cold logic meets soft humanity in this digital shrine.
          </p>
        </section>

        <footer className="text-center py-10 text-xs text-gray-500">
          © 2025 • angelslanding tribute to Rei Ayanami • EVA-00 • NERV Tokyo-3
        </footer>
      </main>
    </>
  );
}
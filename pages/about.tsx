import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>REI | Pilot Profile</title>
        <meta name="description" content="Pilot of Evangelion Unit-00. Ayanami, Rei." />
      </Head>

      <main className="min-h-screen bg-entry-white text-eva-dark font-rei px-6 py-12">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl mb-4 text-rei-blue font-light">Pilot Profile: Rei Ayanami</h1>

          <p className="text-gray-600 mb-8 italic">
            "A vessel, a copy, a purpose — I exist to pilot the Eva."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h2 className="text-xl mb-2 text-nerv-red">Personal Details</h2>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>Designation: First Child</li>
                <li>Eva Unit: 00</li>
                <li>Affiliation: NERV Tokyo-3</li>
                <li>Height: 149 cm</li>
                <li>Blood Type: A</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-2 text-nerv-red">Psychological Notes</h2>
              <p className="text-sm text-gray-700">
                Emotionally distant. Highly obedient. Appears human but exhibits unusual resilience and synchronization capacity.
                Subject shows occasional emotional variance, particularly when interacting with Ikari, Shinji.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
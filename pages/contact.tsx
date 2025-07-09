import React from "react"; import Head from "next/head";

export default function Contact() { return ( <> <Head> <title>REI | Communication Uplink</title> <meta name="description" content="Message Protocol – NERV Internal System" /> </Head>

<main className="min-h-screen bg-rei-gray font-rei px-6 py-12 text-eva-dark">
    <section className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl text-center text-rei-blue mb-6">Establish Link</h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Pilot Identifier
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rei-blue focus:ring-rei-blue"
            placeholder="e.g. Shinji Ikari"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Encoded Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rei-blue focus:ring-rei-blue"
            placeholder="Your message will be routed through the MAGI system."
          />
        </div>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Direct Channels</h2>
          <div className="bg-rei-gray rounded-md p-4 space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Comm ID:</span> +212 628-417296</p>
            <p><span className="font-medium">Data Mail:</span> reinami@mirai.re</p>
            <p><span className="font-medium">Field Node:</span> github.com/reinami</p>
          </div>
        </div>
      </form>
    </section>
  </main>
</>

); }


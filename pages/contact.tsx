import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>ITAS CI — Contact</title>
        <meta name="description" content="Contactez ITAS CI" />
      </Head>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-700 mb-6">Envoyez‑nous un message ou écrivez à <strong>contact@itas-ci.example</strong>.</p>

        <form className="max-w-xl">
          <label className="block mb-2">Nom</label>
          <input className="w-full border rounded mb-4 p-2" />

          <label className="block mb-2">Email</label>
          <input className="w-full border rounded mb-4 p-2" />

          <label className="block mb-2">Message</label>
          <textarea className="w-full border rounded mb-4 p-2" rows={6} />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </main>
    </>
  )
}

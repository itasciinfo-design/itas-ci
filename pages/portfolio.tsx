import Head from 'next/head'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>ITAS CI — Réalisations</title>
        <meta name="description" content="Réalisations — ITAS CI" />
      </Head>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Nos réalisations</h1>
        <p className="text-gray-700 mb-6">Exemples de projets récents (placeholders).</p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-4 border rounded">
            <h3 className="font-semibold">Projet A</h3>
            <p className="text-sm text-gray-600">Site vitrine pour un client local.</p>
          </article>
          <article className="p-4 border rounded">
            <h3 className="font-semibold">Projet B</h3>
            <p className="text-sm text-gray-600">Application web interne.</p>
          </article>
        </div>
      </main>
    </>
  )
}

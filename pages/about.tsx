import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>ITAS CI — Qui sommes-nous</title>
        <meta name="description" content="Qui sommes-nous — ITAS CI" />
      </Head>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Qui sommes‑nous</h1>
        <p className="text-gray-700 mb-4">Fondée pour apporter des solutions numériques pragmatiques, ITAS CI combine expertise technique et sens du service.</p>
        <p className="text-gray-700">Notre équipe travaille sur des projets web, mobile et cloud, avec un focus sur l'expérience utilisateur et la qualité de code.</p>
      </main>
    </>
  )
}

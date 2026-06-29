import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ITAS CI — Accueil</title>
        <meta name="description" content="ITAS CI — Société de services" />
      </Head>

      <main className="container mx-auto px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">ITAS CI</h1>
          <p className="text-lg text-gray-700 mb-8">Solutions digitales & conseils pour accompagner votre transformation.</p>
          <a href="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md">Nos services</a>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">À propos</h2>
          <p className="text-gray-700">ITAS CI est une société spécialisée dans la conception de sites web, l'intégration et le conseil en transformation numérique. Nous accompagnons les entreprises locales et internationales.</p>
        </section>
      </main>
    </>
  )
}

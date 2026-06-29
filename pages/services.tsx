import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>ITAS CI — Services</title>
        <meta name="description" content="Nos services — ITAS CI" />
      </Head>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Nos services</h1>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold">Conception de sites web</h3>
            <p className="text-gray-700">Sites vitrine, e‑commerce, applications web sur mesure.</p>
          </li>
          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold">Intégration & Déploiement</h3>
            <p className="text-gray-700">CI/CD, hébergement, maintenance.</p>
          </li>
          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold">Conseil & Accompagnement</h3>
            <p className="text-gray-700">Audit technique, stratégie digitale.</p>
          </li>
          <li className="p-6 border rounded-lg">
            <h3 className="font-semibold">Support & Formation</h3>
            <p className="text-gray-700">Formations techniques et transfert de compétences.</p>
          </li>
        </ul>
      </main>
    </>
  )
}

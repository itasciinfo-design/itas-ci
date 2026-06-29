import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-xl">ITAS CI</a>
        </Link>

        <nav className="space-x-4">
          <Link href="/about"><a className="text-gray-700">À propos</a></Link>
          <Link href="/services"><a className="text-gray-700">Services</a></Link>
          <Link href="/portfolio"><a className="text-gray-700">Réalisations</a></Link>
          <Link href="/contact"><a className="text-gray-700">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}

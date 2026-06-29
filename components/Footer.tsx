export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ITAS CI — <a href="mailto:contact@itas-ci.example" className="underline">contact@itas-ci.example</a>
      </div>
    </footer>
  )
}

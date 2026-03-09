import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-green-600 text-white">
      <Link href="/">Home</Link>
      <Link href="/items">Itens</Link>
      <Link href="/publish">Publicar</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Cadastro</Link>
    </nav>
  );
}

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          ReUse! ♻️
        </h1>

        <p className="mt-4">
          Plataforma para compra e venda de materiais recicláveis.
        </p>
      </div>
    </main>
  );
}

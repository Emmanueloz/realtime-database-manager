import { CardProject } from "../components/CardProject";

function DataBasesPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Proyectos de firebase</h1>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardProject />
      </section>
    </main>
  );
}

export { DataBasesPage };

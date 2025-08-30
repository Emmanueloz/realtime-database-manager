import { CardDB } from "../components/CardDB";

function DataBasesPage() {
  const dbList: IDatabase[] = [
    { id: "1", name: "Proyecto 1" },
    { id: "2", name: "Proyecto 2" },
    { id: "3", name: "Proyecto 3" },
    { id: "4", name: "Proyecto 4" },
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Proyectos de firebase</h1>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dbList.map((db) => (
          <CardDB key={db.id} db={db} />
        ))}
      </section>
    </main>
  );
}

export { DataBasesPage };

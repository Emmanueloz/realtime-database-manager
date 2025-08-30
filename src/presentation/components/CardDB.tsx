function CardDB({ db }: { db: IDatabase }) {
  return (
    <article>
      <h2>{db.name}</h2>
    </article>
  );
}

export { CardDB };

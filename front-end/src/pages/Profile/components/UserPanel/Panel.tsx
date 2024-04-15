interface PanelProps {
  children: React.ReactNode;
}

export const Panel = ({ children }: PanelProps) => {
  return (
    <section className="border rounded-2xl bg-slate-200 mx-4 my-8">
      <div className="mx-4 my-8 text-2xl font-medium">
        <h1>Olá, seja muito bem vindo!</h1>
      </div>
      <div className="bg-white rounded-2xl mx-4 my-4 px-8 py-4">{children}</div>
    </section>
  );
};

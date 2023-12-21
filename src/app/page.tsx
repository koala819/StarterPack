import Card from "@/src/components/atoms/Card";
import { characteresDB } from "@/src/lib/characteresDB";

export default async function Page() {
  const data = await characteresDB();

  return (
    <div>
      <h1 className='text-4xl font-bold mb-2 text-center w-full'>DbZ</h1>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data?.items.map((perso: any, id: number) => (
          <div key={id} className='text-red-500'>
            <Card
              key={id}
              description={perso.description}
              name={perso.name}
              ki={perso.ki}
              maxKi={perso.maxKi}
              race={perso.race}
              gender={perso.gender}
              image={perso.image}
              affiliation={perso.affiliation}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

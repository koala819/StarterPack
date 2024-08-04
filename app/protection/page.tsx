import Link from "next/link";

export default function Page() {
  return (
    <section className='text-gray-700 dark:text-white text-justify'>
      <div className='container px-4 mb-20 mt-20 mx-auto '>
        <h1 className='text-blue-500 dark:text-cyan-500 text-2xl text-center mb-12 uppercase font-bold'>
          Protection des données personnelles
        </h1>

        <div className='flex flex-col space-y-4'>
          <p>
            Dix31 est soucieux de la protection des données personnelles. Je
            m&apos;engage à assurer le meilleur niveau de protection à vos
            données personnelles en conformité avec la loi applicable et le{" "}
            <Link
              href='https://www.cnil.fr/fr/reglement-europeen-protection-donnees'
              target='_blank'
              className='underline hover:text-blue-700'
            >
              règlement général sur la protection des données personnelles
            </Link>
            .
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Responsable du traitement
        </h1>
      </div>
    </section>
  );
}

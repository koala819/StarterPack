export default function Page() {
  return (
    <section className='text-gray-700 dark:text-white '>
      <div className='container px-4 mb-20 mt-20 mx-auto '>
        <h1 className='text-blue-500 dark:text-cyan-500 text-2xl text-center mb-12 uppercase font-bold'>
          Mentions légales
        </h1>

        <div className='flex flex-col space-y-4'>
          <p>
            <span className='font-bold underline'>Nom du site web :</span>{" "}
            Starter Pack
          </p>
          <p>
            <span className='font-bold underline'>Numéro de Siret :</span>{" "}
            xxxxxxxxxx
          </p>
          <p>
            <span className='font-bold underline'>
              Directeur de la publication :
            </span>{" "}
            DIX31
          </p>
          <p>
            <span className='font-bold underline'>Activité :</span> Création de
            sites web sur mesure et développement de logiciels spécifiques
          </p>
          <p>
            <span className='font-bold underline'>URL :</span> www.dix31.com
          </p>
          <p>
            <span className='font-bold underline'>Localisation :</span> 31300
            Toulouse - France
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Hébergement
        </h1>
        <div className='flex flex-col space-y-4'>
          <p>
            <span className='font-bold underline'>Nom :</span> Vercel
          </p>
        </div>

        <h1 className='sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-slate-400 mt-8'>
          Cookies
        </h1>
      </div>
    </section>
  );
}

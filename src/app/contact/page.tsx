'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Page() {
  const [hideForm, setHideForm] = useState(false)
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide",
      ),

    first_name: yup.string().required('Veuillez saisir votre nom'),
    msg: yup.string().required('Veuillez saisir votre message'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleSendMail(values: any) {
    const data = {
      firstName: values.first_name,
      email: values.email,
      message: values.msg,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        if (response.status === 200) {
          toast.success('Votre message a bien été envoyé')
          setHideForm(true)
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  return (
    <section className="flex-grow text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800">
        <iframe
          style={{
            filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
          }}
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54970.122924033974!2d1.489419400498161!3d43.60630826308362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1605604684663!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
        />
      </div>

      <form
        onSubmit={handleSubmit(handleSendMail)}
        className="container px-5 py-24 mx-auto flex"
      >
        <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-600 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 dark:text-gray-200 text-lg font-medium title-font text-center pb-2 mb-2">
            {!hideForm ? 'Contactez moi' : 'Merci'}
          </h2>
          {!hideForm && (
            <div className="h-1 bg-gray-200 dark:bg-gray-400 rounded overflow-hidden">
              <div className="w-24 h-full bg-blue-500"></div>
            </div>
          )}
          <p
            className={`${
              !hideForm
                ? 'leading-relaxed mb-5 text-gray-600 dark:text-gray-200 mt-2'
                : 'text-center'
            }`}
          >
            {!hideForm
              ? 'Transformez votre vision en réalité avec mon développement sur mesure.'
              : "Je vous répondrai d'ici 24h maximum."}
          </p>
          {!hideForm && (
            <>
              <div className="relative mb-4">
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      color="primary"
                      // label="Nom"
                      id="first_name"
                      placeholder="Entrez votre nom"
                      defaultValue="Xavier"
                      onChange={onChange}
                      value={value}
                      className="max-w-[280px]"
                    />
                  )}
                />

                {errors.first_name && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.first_name.message}
                  </div>
                )}
              </div>

              <div className="relative mb-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="email"
                      color="primary"
                      // label="Email"
                      id="email"
                      placeholder="Entrez votre email"
                      defaultValue="contact@dix31.com"
                      onChange={onChange}
                      value={value}
                      className="max-w-[280px]"
                    />
                  )}
                />

                {errors.email && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="relative mb-4">
                <Controller
                  name="msg"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Textarea
                      color="primary"
                      value={value}
                      onChange={onChange}
                      placeholder="Veuillez saisir votre message"
                      autoFocus
                      className="max-w-xs"
                    />
                  )}
                />

                {errors.msg && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.msg.message}
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center">
                <Button color="primary" type="submit">
                  Envoyer
                </Button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-300 mt-3">
                Mon engagement : vous apporter une réponse en moins de 24h.
              </p>
            </>
          )}
        </div>
      </form>

      <div className="w-full h-96" />
    </section>
  )
}

"use client";
import {
  Modal,
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { DragonBall } from "@/src/types/models";

export default function Card({
  name,
  ki,
  maxKi,
  race,
  gender,
  image,
  affiliation,
  description,
}: DragonBall) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function displayModal() {
    onOpen();
  }

  return (
    <>
      <section
        className='relative bg-gray-300 dark:bg-gray-800 shadow-md rounded-3xl p-2 mx-1 my-3'
        onClick={() => displayModal()}
      >
        <div className='flex justify-center overflow-x-hidden rounded-2xl relative'>
          <Image className='h-20 object-center' alt={"alt"} src={image} />
        </div>
        <div className='mt-4 pl-2 mb-2'>
          <h1 className='text-lg font-semibold text-gray-900 mb-2'>{name}</h1>
          <text className='flex space-x-4'>
            {race} / {gender}
          </text>
          <p className='text-md text-gray-800'>base KI : {ki}</p>
          <p className='text-md text-gray-800'>total KI : {maxKi}</p>

          <p className='flex items-center mb-1 mt-4 mr-4 group cursor-pointer text-gray-800'>
            Affiliation{""}
            <span className='bold  text-red-400 ml-4'>{affiliation}</span>
          </p>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='5xl'
        scrollBehavior={"inside"}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <h3 className='text-gray-500 mb-3 dark:text-gray-300 text-base'>
                  {name}
                </h3>
                <text className='title'>
                  {race} / {gender}
                </text>
              </ModalHeader>
              <ModalBody>
                <div>{description}</div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

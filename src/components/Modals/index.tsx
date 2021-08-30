import { ReactNode } from 'react';
import { mutate } from 'swr';

import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import { registerNewSite } from 'services/db';
import { useAuth } from 'hooks/useAuth';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useFetch } from 'hooks/useFetch';
import { SiteData } from 'pages/dashboard';

export type RegisterSiteDataTypes = {
  authorId: string | undefined;
  author: string | undefined;
  createdAt: string;
  name: string;
  url: string;
};

type FormInputType = {
  name: string;
  url: string;
};

type AddSiteModalProps = {
  children: ReactNode;
};

export function AddSiteModal({ children }: AddSiteModalProps) {
  const { user } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useFetch<SiteData>('sites');

  function onRegisterNewSite({ name, url }: FormInputType) {
    const newSite = {
      authorId: user?.uid,
      author: user?.name,
      createdAt: new Date().toISOString(),
      name,
      url,
    };

    registerNewSite(newSite);
    toast.success('Successfully toasted!');
    reset();

    mutate(async (data: any) => {
      console.log(data);
      return { sites: [...data.sites, newSite] };
    }, false);

    onClose();
  }

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={handleSubmit(onRegisterNewSite)}
          bgColor="#10254C"
        >
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My site"
                {...register('name', { required: true, maxLength: 40 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                {...register('url', { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} size="sm" variant="outline">
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

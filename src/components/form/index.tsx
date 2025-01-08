import React from 'react';
import { toast } from 'webcoreui';
import { actions } from 'astro:actions';
import { Spinner, Toast } from 'webcoreui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Select, Textarea, Button } from 'webcoreui/react';

import { WishList } from '@content/form';

import { FromSchema, type FormType } from '@customTypes/form';

import Checkboxes from './Checkboxes';
import { Icon } from 'webcoreui/react';

const defaultValues: FormType = {
  guests: 0,
  budget: 0,
  wishList: [],
  yourName: '',
  comments: '',
  coupleName: '',
  date: '',
  email: '',
  phone: '',
  place: '',
  reference: '',
  weddingType: '',
};

const FormContact = () => {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(FromSchema),
  });

  return (
    <React.Fragment>
      <form
        className="w-full px-[1rem] md:px-[5rem] lg:px-[10rem] my-[2rem] lg:my-[4rem] flex flex-col !gap-y-[1rem]"
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
      >
        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <Input
                type="text"
                label="Su nombre"
                {...field}
                subText={form.formState.errors.yourName?.message}
              />
            )}
          />

          <Controller
            control={form.control}
            name="coupleName"
            render={({ field }) => (
              <Input
                type="text"
                label="Nombre de su pareja"
                {...field}
                subText={form.formState.errors.coupleName?.message}
              />
            )}
          />
        </section>

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                type="email"
                label="Email"
                {...field}
                subText={form.formState.errors.email?.message}
              />
            )}
          />

          <Controller
            control={form.control}
            name="phone"
            render={({ field }) => (
              <Input
                type="tel"
                label="Teléfono"
                {...field}
                subText={form.formState.errors.phone?.message}
              />
            )}
          />
        </section>

        <Controller
          control={form.control}
          name="place"
          render={({ field }) => (
            <Input
              type="text"
              label="Lugar preferido de la boda"
              {...field}
              subText={form.formState.errors.place?.message}
            />
          )}
        />

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="guests"
            render={({ field }) => (
              <Input
                type="number"
                label="Número de invitados"
                {...field}
                value={field.value ?? 0}
                subText={form.formState.errors.guests?.message}
                onChange={(e) => {
                  field.onChange(parseInt(e.target.value, 10));
                }}
              />
            )}
          />

          <Controller
            control={form.control}
            name="budget"
            render={({ field }) => (
              <Input
                type="number"
                label="Presupuesto estimado"
                {...field}
                value={field.value ?? 0}
                subText={form.formState.errors.budget?.message}
                onChange={(e) => {
                  field.onChange(parseInt(e.target.value, 10));
                }}
              />
            )}
          />
        </section>

        <Controller
          control={form.control}
          name="date"
          render={({ field }) => (
            <Input
              type="date"
              label="Fecha de la boda"
              {...field}
              subText={form.formState.errors.date?.message}
            />
          )}
        />

        <Controller
          control={form.control}
          name="comments"
          render={({ field }) => (
            <Textarea
              label="Comentarios"
              {...field}
              value={field.value ?? ''}
              subText={form.formState.errors.comments?.message}
            />
          )}
        />

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="reference"
            render={({ field }) => (
              <Input
                type="text"
                label="¿Cómo se enteró de nosotros?"
                {...field}
                value={field.value ?? ''}
                subText={form.formState.errors.reference?.message}
              />
            )}
          />

          <Controller
            control={form.control}
            name="weddingType"
            render={({ field }) => (
              <Select
                label="Tipo de boda"
                itemGroups={[
                  {
                    items: [{ name: 'Religiosa' }, { name: 'Civil' }],
                  },
                ]}
                {...field}
                value={field.value ?? ''}
                subText={form.formState.errors.weddingType?.message}
              />
            )}
          />
        </section>

        <Controller
          control={form.control}
          name="wishList"
          render={({ field }) => (
            <Checkboxes
              id="wishList"
              options={WishList}
              label="Lista de deseos"
              values={field.value ?? []}
              onChange={field.onChange}
            />
          )}
        />

        <Button
          className="mt-[0.5rem] w-full !bg-teal-600 hover:!bg-teal-700 !text-white"
          type="submit"
        >
          {loading ? (
            <Spinner color="white" width={42} size={30} />
          ) : (
            <span className="my-[0.35rem]">Enviar solicitud</span>
          )}
        </Button>
      </form>
      <Toast
        theme="success"
        position="top-right"
        className="toast-success"
        title="Hemos recibido tu solicitud!"
      >
        <p className="text-sm">
          Nos pondremos en contacto contigo lo antes posible.
        </p>
      </Toast>
      <Toast
        theme="alert"
        position="top-right"
        className="toast-error"
        title="Hubo un error al enviar tu solicitud"
      >
        <p className="text-sm">
          Por favor, intenta de nuevo más tarde o contacta a soporte.
        </p>
      </Toast>
    </React.Fragment>
  );

  function onSubmit(data: FormType) {
    setLoading(true);
    actions
      .sendEmail(data)
      .then(() => {
        form.reset(defaultValues);
        toast('.toast-success');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        toast('.toast-error');
      })
      .finally(() => setLoading(false));
  }
};

export default FormContact;

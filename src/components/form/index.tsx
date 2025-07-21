import React from 'react';
import { toast } from 'webcoreui';
import { actions } from 'astro:actions';
import { Spinner } from 'webcoreui/react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Select, Textarea, Button } from 'webcoreui/react';

import { WishList } from '@content/form';

import { FromSchema, type FormType } from '@customTypes/form';

import Checkboxes from './Checkboxes';

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
  eventType: '',
  services: [],
  otherWhishList: '',
};

import './form.scss';

const FormContact = () => {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(FromSchema),
  });

  const { wishList: wishListWatch = [] } = useWatch({
    control: form.control,
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

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <Select
                label="Tipo de evento"
                itemGroups={[
                  {
                    items: [
                      { name: 'Quinceañera' },
                      { name: 'Boda Civil' },
                      { name: 'Boda Eclesiástica' },
                      { name: 'Boda Civil y Eclesiástica' },
                      { name: 'Otro' },
                    ],
                  },
                ]}
                {...field}
                value={field.value ?? ''}
                subText={form.formState.errors.eventType?.message}
                onChange={(e) => field.onChange(e.name)}
              />
            )}
          />

          <Controller
            control={form.control}
            name="place"
            render={({ field }) => (
              <Input
                type="text"
                label="Lugar preferido"
                {...field}
                subText={form.formState.errors.place?.message}
              />
            )}
          />
        </section>

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="guests"
            render={({ field }) => (
              <Input
                type="number"
                label="Número de invitados"
                {...field}
                value={field.value || undefined}
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
                value={field.value || undefined}
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
              label="Fecha estimada"
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

        {wishListWatch?.includes('Otros') && (
          <Controller
            control={form.control}
            name="otherWhishList"
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                placeholder="Especifique los otros servicios deseados"
                value={field.value ?? ''}
                subText={form.formState.errors.otherWhishList?.message}
              />
            )}
          />
        )}

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
    </React.Fragment>
  );

  async function onSubmit(formData: FormType) {
    setLoading(true);

    // setTimeout(() => {
    //   toast('.toast-success');
    //   setLoading(false);
    // }, 2000);

    if (!formData.wishList?.includes('Otros')) {
      formData.otherWhishList = '';
    }

    const { data, error } = await actions.sendEmail(formData);

    if (data) {
      toast('.toast-success');
      form.reset();
    } else {
      console.error(error);
      toast('.toast-error');
    }

    setLoading(false);
  }
};

export default FormContact;

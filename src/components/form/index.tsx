import React from 'react';
import { toast } from 'webcoreui';
import { actions } from 'astro:actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller, useWatch } from 'react-hook-form';
import {
  Spinner,
  Input,
  Select,
  Textarea,
  Button,
  Icon,
} from 'webcoreui/react';

import { WishList } from '@content/form';

import { FromSchema, type FormType } from '@customTypes/form';

import Checkboxes from './Checkboxes';

const defaultValues: FormType = {
  guests: 0,
  budget: 0,
  yourName: '',
  comments: '',
  coupleName: '',
  date: '',
  email: '',
  phone: '',
  place: '',
  reference: '',
  eventType: '',
  services: '',
  otherServices: '',
  wishList: [],
  otherWhishList: '',
};

import './form.scss';

const FormContact = () => {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(FromSchema),
  });

  const { wishList: wishListWatch = [], services: servicesWatch = '' } =
    useWatch({
      control: form.control,
    });

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center mt-16 px-[1rem] md:px-[5rem] lg:px-[10rem]">
        <div className="w-full flex flex-col items-center sm:max-w-[700px] 2xl:max-w-[1000px]">
          <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            ¡HABLEMOS!
          </h2>
          <p className="text-sm md:text-sm lg:text-base text-justify">
            ¡Nos encantaría saber de ti! Si tienes alguna pregunta o comentario,
            no dudes en contactarnos por correo electrónico o WhatsApp.
          </p>
          <p className="text-sm md:text-sm lg:text-base text-justify">
            Si necesitas una cotización o agendar una reunión, te invitamos a
            completar nuestro formulario. Este paso es clave para que podamos
            entender mejor tus necesidades y podamos preparar una primera
            reunión productiva. Una vez que recibamos tu información, nos
            pondremos en contacto contigo a la brevedad para coordinar los
            detalles.
          </p>
          <p className="text-sm md:text-sm lg:text-base text-justify">
            ¡Estamos emocionados de empezar a crear contigo un día que
            recordarás por el resto de tu vida!
          </p>
        </div>
      </div>

      <form
        className="w-full px-[1rem] md:px-[5rem] lg:px-[10rem] my-[2rem] lg:my-[4rem] flex flex-col !gap-y-[1rem]"
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
      >
        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Tu nombre</div>
                  <span className="text-red-600">*</span>
                </div>
                <Input
                  type="text"
                  required
                  // label="Tu nombre *"
                  {...field}
                  subText={form.formState.errors.yourName?.message}
                />
              </label>
            )}
          />

          <Controller
            control={form.control}
            name="coupleName"
            render={({ field }) => (
              <Input
                type="text"
                label="Nombre de tu pareja"
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
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Email</div>
                  <span className="text-red-600">*</span>
                </div>
                <Input
                  type="email"
                  {...field}
                  subText={form.formState.errors.email?.message}
                />
              </label>
            )}
          />

          <Controller
            control={form.control}
            name="phone"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Teléfono</div>
                  <span className="text-red-600">*</span>
                </div>
                <Input
                  type="tel"
                  {...field}
                  subText={form.formState.errors.phone?.message}
                />
              </label>
            )}
          />
        </section>

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="services"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">
                    Servicio(s) que necesitas contratar
                  </div>
                  <span className="text-red-600">*</span>
                </div>
                <Select
                  itemGroups={[
                    {
                      items: [
                        { name: 'Organización total' },
                        { name: 'Organización parcial' },
                        { name: 'Coordinación del día' },
                        { name: 'Boda destino' },
                        { name: 'Diseño y decoración' },
                        { name: 'Asesoría personalizada' },
                        { name: 'Otro' },
                      ],
                    },
                  ]}
                  {...field}
                  value={field.value ?? ''}
                  subText={form.formState.errors.eventType?.message}
                  onChange={(e) => field.onChange(e.name)}
                />
              </label>
            )}
          />

          <Controller
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Tipo de evento</div>
                  <span className="text-red-600">*</span>
                </div>
                <Select
                  itemGroups={[
                    {
                      items: [
                        { name: 'Cumpleaños' },
                        { name: 'Quinceañera' },
                        { name: 'Pedida de mano' },
                        { name: 'Boda Civil' },
                        { name: 'Boda Eclesiástica' },
                        { name: 'Boda Civil y Eclesiástica' },
                        { name: 'Corporativo' },
                        { name: 'Otro' },
                      ],
                    },
                  ]}
                  {...field}
                  value={field.value ?? ''}
                  subText={form.formState.errors.eventType?.message}
                  onChange={(e) => field.onChange(e.name)}
                />
              </label>
            )}
          />
        </section>

        {servicesWatch?.includes('Otro') && (
          <Controller
            control={form.control}
            name="otherServices"
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                placeholder="Especifique los otros servicios deseados"
                value={field.value ?? ''}
                subText={form.formState.errors.otherServices?.message}
              />
            )}
          />
        )}

        <section className="flex flex-col gap-[1rem] lg:flex-row">
          <Controller
            control={form.control}
            name="date"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Fecha estimada</div>
                  <span className="text-red-600">*</span>
                  <span
                    className="ml-1"
                    data-tooltip="Si no tienes una fecha definida, puedes ayudarnos con una fecha tentativa, indicandonos mes y año"
                  >
                    <Icon type="info" size={16} />
                  </span>
                </div>
                <Input
                  type="date"
                  {...field}
                  subText={form.formState.errors.date?.message}
                />
              </label>
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
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-2">
                  <div className="label-custom">¿Cuántos invitados esperas</div>
                  <span data-tooltip="Este dato es muy importante para nosotros, ya que nos ayudará a brindarte una mejor asesoría y recomendaciones de proveedores acorde al tamaño de tu evento">
                    *
                  </span>
                </div>
                <Input
                  type="number"
                  {...field}
                  value={field.value || undefined}
                  subText={form.formState.errors.guests?.message}
                  onChange={(e) => {
                    field.onChange(parseInt(e.target.value, 10));
                  }}
                />
              </label>
            )}
          />

          <Controller
            control={form.control}
            name="budget"
            render={({ field }) => (
              <label className="flex w-full flex-col !gap-0 mb-[5px]">
                <div className="flex items-center align-middle !gap-1">
                  <div className="label-custom">Presupuesto estimado</div>
                  <span className="text-red-600">*</span>
                  <span
                    className="ml-1"
                    data-tooltip="Conocer esta información es muy importante para nosotros, así tendremos una guía de todo lo que podemos ofrecerte de acuerdo al rubro que tienen planificado invertir en tu boda. (Específica en USD)"
                  >
                    <Icon type="info" size={16} />
                  </span>
                </div>
                <Input
                  type="number"
                  // label="Presupuesto estimado"
                  {...field}
                  value={field.value || undefined}
                  subText={form.formState.errors.budget?.message}
                  onChange={(e) => {
                    field.onChange(parseInt(e.target.value, 10));
                  }}
                />
              </label>
            )}
          />
        </section>

        <Controller
          control={form.control}
          name="wishList"
          render={({ field }) => (
            <label className="flex flex-col !gap-0 mb-[5px]">
              <div className="flex items-center align-middle !gap-1">
                <div className="label-custom">
                  Selecciona los proveedores para tu evento
                </div>
                <span className="text-red-600">*</span>
              </div>
              <Checkboxes
                id="wishList"
                options={WishList}
                values={field.value ?? []}
                onChange={field.onChange}
              />
            </label>
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
                placeholder="Especifique los otros proveedores deseados"
                value={field.value ?? ''}
                subText={form.formState.errors.otherWhishList?.message}
              />
            )}
          />
        )}

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

        <Button className="mt-[0.5rem] w-full contact-button" type="submit">
          {loading ? (
            <Spinner color="white" width={42} size={30} />
          ) : (
            <span
              className="my-[0.35rem] text-white"
              style={{
                color: '#fff',
              }}
            >
              Enviar solicitud
            </span>
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

export const newContactTemplate = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="container mx-auto p-4 flex flex-col gap-y-[1rem]">
      <!-- Header -->
      <div class="bg-gray-100 p-4 rounded-md">
        <p class="text-2xl font-bold text-gray-800">Nuevo contacto</p>
      </div>
      <!-- Main Content -->
      <div class="bg-gray-100 p-4 rounded-md flex flex-col gap-y-[0.75rem]">
        <div>
          <span class="text-lg text-gray-800 font-semibold">Nombre:</span>
          <span class="text-lg text-gray-700">{{yourName}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold"
            >Nombre de la pareja:</span
          >
          <span class="text-lg text-gray-700">{{coupleName}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Teléfono:</span>
          <span class="text-lg text-gray-700">{{phone}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold"
            >Lugar preferido:</span
          >
          <span class="text-lg text-gray-700">{{place}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Invitados:</span>
          <span class="text-lg text-gray-700">{{guests}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Presupuesto:</span>
          <span class="text-lg text-gray-700">{{budget}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Fecha del evento:</span>
          <span class="text-lg text-gray-700">{{date}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Referencia:</span>
          <span class="text-lg text-gray-700">{{reference}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Tipo de evento:</span>
          <span class="text-lg text-gray-700">{{eventType}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold"
            >Lista de deseos:</span
          >
          <span class="text-lg text-gray-700">{{wishList}}</span>
        </div>
        <div>
          <span class="text-lg text-gray-800 font-semibold">Otros servicios:</span>
          <span class="text-lg text-gray-700">{{otherWhishList}}</span>
        </div>
        <div>
          <p class="text-lg text-gray-800 font-semibold">Comentarios:</p>
          <p class="text-lg text-gray-700">{{comments}}</p>
        </div>
      </div>
      <!-- Footer -->
      <div class="bg-gray-100 p-4 rounded-md">
        <p>Footer content goes here ...</p>
      </div>
    </div>
  </body>
</html>`;

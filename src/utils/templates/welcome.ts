export const templateEmail = `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div class="container mx-auto p-4">
      <!-- Header -->
      <div class="bg-gray-100 p-4">
        <p
          class="text-2xl font-bold text-gray-800"
        >
          Hola {{name}}
        </p>
        <p
          class="text-lg text-gray-700"
        >
          Gracias por contactarnos para tu evento
        </p>
      </div>
      <!-- Main Content -->
      <div class="p-4">
        <p class="text-lg text-gray-800">
          Proident ullamco cillum eu magna dolor Lorem sit elit ad dolore eiusmod
          aliquip dolor enim. Cupidatat labore velit aliquip ullamco aute esse
          cupidatat nisi quis ullamco. Pariatur aute do quis ex exercitation ullamco
          enim tempor. Culpa veniam do ex velit magna consequat Lorem duis enim anim
          do.
        </p>
      </div>
      <!-- Footer -->
      <div class="bg-gray-100 p-4">
        <p>Footer content goes here ...</p>
      </div>
    </div>
  </body>
</html>

`;

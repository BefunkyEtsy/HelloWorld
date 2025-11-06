<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A React Hello World app built with Tailwind CSS." />
    <title>React Hello World</title>

    <!-- Tailwind via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            },
            animation: {
              'gradient-x': 'gradient-x 5s ease infinite',
            },
            keyframes: {
              'gradient-x': {
                '0%, 100%': {
                  'background-size': '200% 200%',
                  'background-position': 'left center',
                },
                '50%': {
                  'background-size': '200% 200%',
                  'background-position': 'right center',
                },
              },
            },
          },
        },
      };
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
      rel="stylesheet"
    />

    <!-- Babel for JSX + TSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- React Import Map -->
    <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@18.2.0",
          "react-dom/client": "https://esm.sh/react-dom@18.2.0/client"
        }
      }
    </script>
  </head>

  <body class="font-sans">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <!-- Load the entry file -->
    <script type="text/babel" data-presets="typescript,react" src="./index.tsx"></script>
  </body>
</html>

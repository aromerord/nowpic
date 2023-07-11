# nowpic-service
## Instalaciones
- Iniciar el proyecto `npm init`
- Instalar nodemon para ejecutar el index de forma automática cada vez que hay cambios `npm install -g nodemon`
- Añadir `"dev": "nodemon index.js"` a los scripts del package.json para arrancar el proyecto en desarrollo con `npm run dev`
- Añadir `"start": "node index.js"` a los scripts del package.json para arrancar el proyecto en producción con `npm start`
- Instalar `npm i express dotenv express-validator mongoose body-parser cors dotenv bcrypt express-fileupload jsonwebtoken`
#Instalacion

npm i --save @nestja/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt

#Arracancamos proyecto

npm run start:dev

#Modules & resources 

nest g mo modules/auth
nest g res modules/auth

#Controllers y services

nest g co modules/auth
nest g s modules/auth
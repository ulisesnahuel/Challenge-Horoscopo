# Recursiva-Challenge-Horóscopo
Encuentra tu horóscopo basado en tu signo zodiacal. El objetivo de la aplicación es, a partir de los datos ingresados por el usuario , mostrar el horóscopo del día actual, según corresponda, el signo del usuario de una manera personalizada,
incluyendo un saludo e informando la cantidad de días que restan para su próximo cumpleaños.

## Tecnologías 
- **Backend**: .NET 8 
- **Frontend**: , Node.js, TypeScript, Vite React
- **Persistencia**: MySQL  

## Pasos para ejecutar la aplicación  

### 1. Ejecutar el Backend con Docker
 
Asegúrate de tener Docker instalado en tu máquina y de estar ubicado en el directorio correcto donde se encuentra el archivo `docker-compose.yml` de tu proyecto. El archivo `docker-compose.yml` se encuentra en la raíz del proyecto.

```bash
docker-compose up -d
```

### 2. Si tienes problemas para conectarte al host

Si encuentras problemas para conectar el backend con la base de datos, sigue estos pasos para crear y conectar redes Docker:

- Crea una nueva red de Docker:
    
```bash
docker network create horoscopo-network
```

- Conecta el contenedor de la API con la red:

```bash
docker network connect horoscopo-network Horoscope.Api
```
    
- Conecta el contenedor de MySQL con la red:

```bash
docker network connect horoscopo-network mysql-horoscopo
```


### 3. Configuración en el Frontend

En la carpeta `Horoscope.Client`, ubica el archivo `src/services/horoscopeService.ts` y configura la URL base (`BASE_URL`) para que apunte al backend.

### 4. Ejecutar el Frontend

Una vez configurada la URL en el archivo `services/horoscopeService.ts`, ejecuta la aplicación frontend con:

- Una opción es ejecutar en modo desarrollo 
```bash
npm run dev
```

¡Listo! Ahora deberías poder acceder a tu aplicación de horóscopo tanto en el backend como en el frontend.

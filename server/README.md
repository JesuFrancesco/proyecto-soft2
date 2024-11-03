# modulo de server

## recomendado

instalar extensiones de:

- prisma
- prettier
- error lens

## ejecucion

1. instalar modulos

```bash
npm i
```

2. copiar el .env del backend del drive

```bash
├── client
├── server
│   ├── .env.example
│   └── → .env ←
├── README.md
├── .gitignore
```

3. correr prisma

```bash
npx prisma migrate dev
```

4. iniciar server

```bash
npm run dev
```

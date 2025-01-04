# Dev Next

Dev Next is a job platform built for developers, enabling job postings and applications with Next.js, Tailwind CSS, Prisma, and NextAuth. Open to contributions during development.

## Getting Started

Clone the repository: `git clone https://github.com/saidMounaim/dev-next.git`
Install dependencies:

```
npm install
```

Note: Some dependencies may have not yet been upadated to support React 19. If you get any errors about depencency compatability, run the following:

```
npm install --legacy-peer-deps
```

Create a .env file:

```
DATABASE_URL=""
NEXTAUTH_SECRET=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

## Prisma Studio

To open Prisma Studio, run the following command:

```
npx prisma studio
```

## Seed Database

To seed the database with sample data, run the following command:

```
npx tsx ./db/seed
```

## Built With

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Auth.js](https://authjs.dev/)

## Contribution

All kind of contributions are welcome, please feel free to submit pull requests.

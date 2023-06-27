# Energy Management System - Front

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You are in Version 1.0.

## Overall description

This project is an energy management system for businesses. This system will enable users to monitor, manage and optimize their energy consumption.

## Version 1.0

Version 1.0 aims to enable users to create an account, view a basic dashboard, collect data and import record data.

### Wireframes

_Those were created with Figma_

**Mobile**

![](wireframes/mobile/EMS_mobile.png)

<- here you should put a link to the containing folder

<- maybe you should do a gallery instead of one image

**Desktop**

![](wireframes/desktop/EMS_desktop.png)

<- here you should put a link to the containing folder

<- maybe you should do a gallery instead of one image like following:

- one big image showing the dashboard
- a gallery below of the other pages

### Features

- Dashboard
  - Energy [kwh] vs time [day] in a form of a histo chart
  - Average consumption
  - Recent Highest consumption
- Import record data
  - .csv format
  - .txt format
- Authentication
- Registration
- Responsive interface
- Data collection
  - Data are collected from a database which is automatically generated by an energy record simulation program (24/7 running process)

## Stack

### Front

- NextJs, React
- TypeScript
- Bootstrap

### Back

- Python
- Django
- Django REST Framework

### Database

- PostgreSQL

A REST API is used to manage interaction between the frontend and backend.

## Front Structure

- Pages:

  - Landing page with login
  - Dashboard
  - Signup page

- Routing:
  - /
  - /signup/
  - /dashboard/

## Install

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Useful resources

- [Github README image gallery](https://felixhayashi.github.io/ReadmeGalleryCreatorForGitHub/): interesting for good looking README files.

## Skills mobilized

**Front design**

- sketch a wireframe on paper, with optimizing User experience
- create wireframes with Figma
- draw inspiration from the competition (small competitive intelligence: EDF dashboard equilibre.edf.fr)

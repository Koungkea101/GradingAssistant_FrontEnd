# Grading Assistant - Frontend

This is the frontend application for the Grading Assistant system, built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Running with Docker (Recommended)

The easiest way to run this application is using Docker Compose. From the project root directory:

```bash
# Build and start the container
docker compose up --build -d

# Or just start if already built
docker compose up -d
```

The application will be available at [http://localhost:3067](http://localhost:3067).

To view logs:
```bash
docker compose logs grading-assistant-frontend
```

To stop the container:
```bash
docker compose down
```

### Running in Development Mode

Alternatively, you can run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

This Grading Assistant frontend includes:
- Modern React components with TypeScript
- Tailwind CSS for styling
- Next.js App Router for navigation
- Docker containerization for easy deployment

## Learn More About Next.js

To learn more about the Next.js framework used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Development Notes

- The application is configured for standalone output, optimized for Docker deployment
- Port 3067 is used for the containerized version to avoid conflicts
- All dependencies including dev dependencies are included in the Docker build for proper compilation

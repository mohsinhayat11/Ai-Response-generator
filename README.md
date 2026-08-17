# AI Generated

A lightweight AI chat application built with Next.js and Google Gemini. The app lets users type a prompt, send it to the Gemini API, and render the model response as markdown in the browser.

## Overview

This project demonstrates a simple server-side AI integration pattern using Next.js App Router. The UI is built in the App Router structure and the AI call is handled in a dedicated server action file.

## Features

- Prompt input field for user questions
- Server-side Gemini API integration
- Markdown-rendered AI responses
- Responsive single-page interface
- Built with modern Next.js 16 and React 19

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Google Gemini API via `@google/genai`
- React Markdown
- Tailwind CSS

## Project Structure

```bash
ai-generated/
├── app/
│   ├── actions/
│   │   └── aiActions.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .env.local
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── ...
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or newer
- npm, pnpm, yarn, or bun
- A valid Google Gemini API key

## Installation

1. Open the project folder:

```bash
cd ai-generated
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Gemini API key:

```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

## Running the App

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # Start the local development server
npm run build   # Build the app for production
npm run start   # Run the production build
npm run lint    # Run ESLint checks
```

## How It Works

- The input is captured in the home page component located in `app/page.tsx`.
- The prompt is sent to `GenerateText` from `app/actions/aiActions.ts`.
- That server action calls the Google Gemini API using the `@google/genai` SDK.
- The returned text is displayed in the UI using `react-markdown`.

## Notes

- Keep your Gemini API key in `.env.local` and never commit it to version control.
- If you deploy this app, configure the environment variable in your hosting provider as well.

## License

This project is for learning and demo purposes.

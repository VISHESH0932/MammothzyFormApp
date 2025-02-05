# Mammothzy Next.js App

## Overview

Mammothzy is a SaaS platform designed to facilitate team bonding activities for HR professionals and team leaders. This application allows users to create and manage activities by filling out a multi-page form.

## Project Structure

```
mammothzy-nextjs-app
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── components
│   │   ├── ActivityDetailsForm.tsx
│   │   ├── LocationDetailsForm.tsx
│   │   └── SuccessModal.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── activity.tsx
│   ├── styles
│   │   ├── globals.css
│   │   └── Home.module.css
│   ├── utils
│   │   └── formValidation.ts
│   └── types
│       └── index.ts
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Multi-Page Form**: Users can fill out activity and location details in a structured manner.
- **Form Validation**: Ensures all required fields are completed before submission.
- **Success Modal**: Displays a confirmation message upon successful form submission.

## Getting Started

To get started with the Mammothzy Next.js app, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd mammothzy-nextjs-app
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Development Server**:
   ```
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that adds static types.
- **CSS Modules**: For styling components with scoped CSS.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.# MammothzyFormApp

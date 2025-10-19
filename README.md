# AppKanban

AppKanban is a modern, responsive Kanban board application built with Next.js and TypeScript. It helps teams organize and track their work with a clean, intuitive interface.

## Features

- 📝 Create and manage multiple boards
- 📊 Organize tasks in customizable columns
- 👤 User authentication with profile pictures
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support
- 📱 Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- SQLite - Database

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/OlivierN-Dev/AppKanban.git
cd AppKanban
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── backend/          # Backend logic and database
  └── components/       # React components
      ├── AddTask.tsx
      ├── ColumnName.tsx
      ├── DeleteComp.tsx
      ├── editBoard.tsx
      ├── Login.tsx
      ├── NavBarLi.tsx
      ├── SelectColumn.tsx
      └── Task.tsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

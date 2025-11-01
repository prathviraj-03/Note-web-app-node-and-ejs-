# SIMPLE NOTE BOOK NODE AND EJS

## Project Overview

This is a simple web-based notebook application built with Node.js, Express.js, and EJS templating engine. It allows users to create, read, and manage text-based notes through a clean web interface.

## Features

- **Create Notes**: Add new text notes with a simple form interface
- **Read Notes**: View existing notes in a readable format
- **File-based Storage**: Notes are stored as text files in the `files/` directory
- **Responsive Design**: Clean, minimal UI using EJS templates and static assets
- **Express Server**: Lightweight Node.js server handling routes and rendering

## Project Structure

```
├── index.js              # Main application server
├── package.json          # Node.js dependencies and scripts
├── files/                # Directory for storing note files
│   └── Hellofirstnote.txt # Example note file
├── public/               # Static assets
│   ├── images/           # Image files
│   ├── javascripts/      # Client-side JavaScript
│   └── stylesheets/      # CSS styles
└── views/                # EJS templates
    ├── index.ejs         # Home page with note list/form
    └── read.ejs          # Note reading page
```

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web framework for handling HTTP requests and routing
- **EJS**: Templating engine for rendering dynamic HTML
- **File System**: Native Node.js fs module for file operations

## Installation

1. Ensure you have Node.js installed (version 14 or higher recommended)
2. Clone or download this project
3. Navigate to the project directory
4. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the application:
   ```bash
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Create a new note by filling out the form on the home page

4. View existing notes by clicking on them from the list

## Development

- The server runs on port 3000 by default
- Static files are served from the `public/` directory
- Notes are stored as `.txt` files in the `files/` directory
- EJS templates are located in the `views/` directory

## Contributing

This is a simple demonstration project. Feel free to fork and modify as needed.

---

Created for learning Node.js, Express, and EJS integration.

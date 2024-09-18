# Spaime

## Overview

This project is a full-stack application that analyzes the time and space complexity of code snippets using Gemini for the analysis and React for the front-end. The back-end is built with Express.js, handling API requests and processing.

## Features

- **Time Complexity Analysis**: Calculate and display the time complexity of given code.
- **Space Complexity Analysis**: Calculate and display the space complexity of given code.
- **Interactive Front-end**: User-friendly interface built with React for submitting code and viewing results.
- **Robust Back-end**: Express.js server that processes code and returns analysis results.

## Technologies Used

- **Front-end**: React
- **Back-end**: Express.js
- **Code Analysis**: Gemini
- **Version Control**: Git

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Bhavykun/Spaime.git
   cd Spaime
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root of the `server` directory and add the necessary environment variables. For example:

   ```bash
   API_KEY=your_gemini_api_key
   ```

4. **Start the Development Servers**

   **For the Front-end:**

   ```bash
   cd src
   npm run dev
   ```

   **For the Back-end:**

   ```bash
   cd server
   node --watch server.js
   ```

   The front-end will be accessible at `http://localhost:5173` and the back-end at `http://localhost:5000`.

## Usage

1. Open the front-end application in your web browser.
2. Enter or paste the code snippet you want to analyze.
3. Submit the code to receive time and space complexity analysis.

## API Endpoints

- **POST `/check`**
  - **Description**: Analyze the provided code snippet.
  - **Request Body**:
    ```json
    {
      'Received data': your code
    }
    ```
  - **Response**:
    ```json
    {
      "data" : analysis
    }
    ```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.


## Acknowledgements

- **Gemini**: For providing the code analysis capabilities.
- **React**: For creating a dynamic and interactive user interface.
- **Express.js**: For powering the back-end server.

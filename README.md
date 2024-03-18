# Email Sending API

This project implements an endpoint using Node.js and JavaScript to receive email information, including body, recipient, and subject, and send this email to the recipients specified. The main module used is [NodeMailer](https://nodemailer.com/), check the documentation and use the transport protocol best suited for you.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Endpoints](#endpoints)
-   [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Juancho-Coding/Portfolio_main_backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Portfolio_main_backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:

    Create a .env file with the following keys:

    - SMTP_SERVER_USER: Username of the mail service account(I'm using Sendingblue).
    - SMTP_SERVER_PASS: Account password.
    - PORT: Port where the endpoint server will be listening, if not included the por is 3000.
    - RECIPIENT: the email you want to send the emails to.

## Usage

To start the server, run:

```bash
npm start
```

By default, the server will run on `http://localhost:3000` or the port included in the `.env file`.

## Endpoints

### 1. Send Email

-   **URL:** `/api/v1/sendmail`
-   **Method:** `POST`
-   **Request Body:**
    ```json
    {
        // check middleware.ts for data validation
        "email": "sender_email@example.com",
        "name": "Sender's name",
        "message": "Email Body"
    }
    ```
-   **Description:** Sends an email to the specified recipient in .env with the provided subject and body.
-   **Response:** Returns a success message if the email is sent successfully.

## License

This project is licensed under the [MIT License](LICENSE).

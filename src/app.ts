import express from "express";
import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import morgan from "morgan";
import bodyParser from "body-parser";

import { validateForm } from "middleware";
import { validationResult } from "express-validator";

dotenv.config();
const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: process.env.SMTP_SERVER_USER,
        pass: process.env.SMTP_SERVER_PASS,
    },
});

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.post("/api/v1/sendmail", validateForm, (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req).array();
    if (result.length > 0) {
        return res.status(400).send({ message: result[0].msg });
    }
    transporter
        .sendMail({
            from: `${req.body.name} 😁 <${req.body.email}>`, // sender
            to: `${process.env.RECIPIENT}`, // list of receivers
            subject: "Hello, I woluld like to get in touch with you", // Subject line
            text: `${req.body.message}, this is my mail ${req.body.email}`, // plain text body
        })
        .then((info) => {
            res.status(200).send({ message: "succesful" });
        })
        .catch((error) => {
            res.status(400).send({ message: "an error occurred" });
        });
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(401).send({ message: "endpoint doesnt exists" });
});

app.listen(process.env.PORT! || 3000, () => {
    console.log("listening");
});

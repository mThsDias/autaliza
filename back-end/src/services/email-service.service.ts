import NodeMailer from 'nodemailer';

export class EmailService {
  static async sendEmail(
    to: string,
    subject: string,
    text: string
  ): Promise<void> {
    const transporter = NodeMailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_ADM,
      to,
      subject,
      text,
    });
  }
}

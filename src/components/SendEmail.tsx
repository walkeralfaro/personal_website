
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { EmailTemplate } from './EmailTemplate';

export interface DataForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const SendEmail = async(data: DataForm) => {
  
  const {name, email, subject, message } = data;
  
  let transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: import.meta.env.SMTP_PORT,
    secure: true,
    auth: {
      user: import.meta.env.EMAIL_USER,
      pass: import.meta.env.EMAIL_PASS,
    },
  });

  console.log(transporter);
  
  const emailHTML = render(<EmailTemplate UserName={name} UserEmail={email} UserSubject={subject} UserMessage={message} />);
  
  const options = {
    from: import.meta.env.EMAIL_DIR,
    to: import.meta.env.EMAIL_DIR,
    subject: subject,
    html: emailHTML,
  }
  
  const info = await transporter.sendMail(options);

  console.log(info);
  

}

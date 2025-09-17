const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { name, company, email, inquiry } = req.body;
  try {
    await resend.emails.send({
      from: process.env.REACT_APP_ORIGINATOR_EMAIL,
      to: 'sales@cfnadigitalsolution.com', // Replace with your target email
      subject: 'New Contact Inquiry',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry:</strong> ${inquiry}</p>
      `
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

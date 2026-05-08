import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the data sent from the React component
    const { fullName, email, phone, subject, message } = await request.json();

    // 1. Configure the Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred service provider
      auth: {
        user: process.env.EMAIL_USER, // e.g., your_email@gmail.com
        pass: process.env.EMAIL_PASS, // e.g., your 16-character App Password
      },
    });

    // 2. Set up the email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "digroz59@gmail.com", // The email address you want to RECEIVE the messages at
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please check server logs." },
      { status: 500 }
    );
  }
}
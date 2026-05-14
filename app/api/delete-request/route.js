import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the data sent from the React component
    const { email, reason } = await request.json();

    // Basic Validation
    if (!email) {
      return NextResponse.json(
        { error: "Registered email address is required." },
        { status: 400 }
      );
    }

    // 1. Configure the Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 2. Set up the email data for Digroz Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "digroz59@gmail.com", 
      subject: `URGENT: Account Deletion Request - ${email}`,
      html: `
        <h3>Account Deletion Request Received</h3>
        <p>A user has requested the permanent deletion of their Digroz Learning account.</p>
        <p><strong>Registered Email:</strong> ${email}</p>
        <p><strong>Reason provided:</strong> ${reason || "Not provided"}</p>
        <br/>
        <p>Please proceed with identity verification and data removal protocols.</p>
      `,
    };

    // 3. Set up the confirmation email for the User
    const userMailOptions = {
      from: `"Digroz Learning" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your account deletion request",
      html: `
        <h3>Account Deletion Request Received</h3>
        <p>Hello,</p>
        <p>We have received your request to permanently delete your account and data associated with <strong>${email}</strong>.</p>
        <p>If you did not make this request, please contact us immediately. Otherwise, our team will review the request and reach out to you shortly to verify your identity and complete the deletion process.</p>
        <br/>
        <p>Regards,<br/>The Digroz Learning Team</p>
      `,
    };

    // 4. Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Deletion request submitted successfully." }, { status: 200 });

  } catch (error) {
    console.error("Failed to process deletion request:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please check server logs." },
      { status: 500 }
    );
  }
}
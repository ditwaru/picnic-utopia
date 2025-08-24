import { NextRequest, NextResponse } from "next/server";
import { sendTemplateEmail } from "ditwaru-aws-helpers";
import { businessNotificationTemplate } from "./templates/business-notification";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, package: packageName, date, guests } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get business email from environment or use a default
    const businessEmail = process.env.AWS_SES_FROM_EMAIL!;

    // Prepare template data
    const templateData = {
      name,
      email,
      phone,
      package: packageName,
      date: date,
      guests: guests,
      message,
    };

    // Send templated email to business owner
    await sendTemplateEmail([businessEmail], "picnic-inquiry", templateData, {
      subject: businessNotificationTemplate.subject,
      htmlBody: businessNotificationTemplate.html(templateData),
    });

    // Send confirmation email to customer
    // Note: Commented out because SES is in sandbox mode and can't send to unverified emails
    // await sendEmail(
    //   [email],
    //   customerConfirmationTemplate.subject,
    //   customerConfirmationTemplate.html({
    //     name,
    //     package: packageName,
    //     date: date,
    //     guests: guests,
    //   })
    // );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

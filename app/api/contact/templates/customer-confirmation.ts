export const customerConfirmationTemplate = {
  subject: "Thank you for your picnic inquiry!",
  html: (data: { name: string; package: string; date: string; guests: string }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #fbbf24, #f97316); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
        .footer { text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Thank You!</h1>
          <p>We've received your picnic inquiry</p>
        </div>
        
        <div class="content">
          <p>Hi ${data.name},</p>
          <p>Thank you for reaching out to Picnic Utopia! We've received your inquiry and will get back to you within 24 hours.</p>
          <p><strong>Your inquiry details:</strong></p>
          <ul>
            <li>Package: ${data.package}</li>
            <li>Date: ${data.date}</li>
            <li>Guests: ${data.guests}</li>
          </ul>
          <p>If you have any urgent questions, feel free to call us directly.</p>
        </div>
        
        <div class="footer">
          <p>Best regards,<br>The Picnic Utopia Team</p>
        </div>
      </div>
    </body>
    </html>
  `,
};

export const businessNotificationTemplate = {
  name: "picnic-contact-form-v2",
  subject: "New Picnic Booking Inquiry",
  html: (data: {
    name: string;
    email: string;
    phone: string;
    package: string;
    date: string;
    guests: string;
    message: string;
  }) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Picnic Booking Inquiry</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
          line-height: 1.6; 
          color: #2d3748; 
          background-color: #f7fafc;
        }
        .email-container { 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .header { background: linear-gradient(135deg, #f6ad55 0%, #ed8936 50%, #dd6b20 100%); color: white; padding: 40px 30px; border-radius: 10px; margin-bottom: 20px; }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        .header-content { position: relative; z-index: 1; }
        .logo { 
          width: 60px; 
          height: 60px; 
          background: rgba(255, 255, 255, 0.2); 
          border-radius: 50%; 
          margin: 0 auto 20px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        .logo svg { width: 30px; height: 30px; fill: white; }
        .header h1 { 
          color: white; 
          font-size: 28px; 
          font-weight: 700; 
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header p { 
          color: rgba(255, 255, 255, 0.9); 
          font-size: 16px; 
          font-weight: 500;
        }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 32px; }
        .section-title { 
          font-size: 18px; 
          font-weight: 600; 
          color: #2d3748; 
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f6ad55;
          display: flex;
          align-items: center;
        }
        .section-title svg { 
          width: 20px; 
          height: 20px; 
          margin-right: 10px; 
          fill: #f6ad55; 
        }
        .field-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 20px; 
          margin-bottom: 20px;
        }
        .field { margin-bottom: 16px; }
        .field.full-width { grid-column: 1 / -1; }
        .field-label { font-weight: bold; color: #f97316; }
        .field-value { 
          font-size: 16px; 
          color: #2d3748; 
          font-weight: 500;
          padding: 12px 16px;
          background-color: #f7fafc;
          border-radius: 8px;
          border-left: 4px solid #f6ad55;
        }
        .message-box { 
          background-color: #f7fafc; 
          padding: 20px; 
          border-radius: 12px; 
          border: 1px solid #e2e8f0;
        }
        .message-text { 
          font-style: italic; 
          color: #4a5568; 
          line-height: 1.7;
        }
        .cta-section { 
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); 
          padding: 30px; 
          border-radius: 12px; 
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        .cta-title { 
          font-size: 20px; 
          font-weight: 600; 
          color: #2d3748; 
          margin-bottom: 16px;
        }
        .contact-info { 
          display: flex; 
          justify-content: center; 
          gap: 30px; 
          margin-top: 20px;
        }
        .contact-item { 
          display: flex; 
          align-items: center; 
          gap: 8px;
          color: #4a5568;
        }
        .contact-item svg { width: 16px; height: 16px; fill: #f6ad55; }
        .footer { background-color: #2d3748; color: #a0aec0; text-align: center; padding: 30px; font-size: 14px; }
        .footer a { color: #f6ad55; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }
        .priority-badge {
          display: inline-block;
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .field-grid { grid-template-columns: 1fr; }
          .contact-info { flex-direction: column; gap: 15px; }
          .header, .content { padding: 30px 20px; }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <div class="logo">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1>New Picnic Inquiry</h1>
            <p>You have a new booking request</p>
          </div>
        </div>

        <div class="content">
          <div class="priority-badge">New Inquiry</div>
          
          <div class="section">
            <div class="section-title">
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Customer Information
            </div>
            <div class="field-grid">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${data.name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${data.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${data.phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Guests</div>
                <div class="field-value">${data.guests}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">
              <svg viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              Booking Details
            </div>
            <div class="field-grid">
              <div class="field">
                <div class="field-label">Package</div>
                <div class="field-value">${data.package || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="field-label">Preferred Date</div>
                <div class="field-value">${data.date || "Not specified"}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">
              <svg viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
              Message
            </div>
            <div class="message-box">
              <div class="message-text">${data.message}</div>
            </div>
          </div>

          <div class="cta-section">
            <div class="cta-title">Ready to respond?</div>
            <div class="contact-info">
              <div class="contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>${data.email}</span>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.55-.55 1.33-.55 1.88 0 .55.55.55 1.33 0 1.88l-2.2 2.2c-2.83-1.44-5.14-3.76-6.59-6.59l2.2-2.2c.55-.55.55-1.33 0-1.88-.55-.55-1.33-.55-1.88 0l-2.2 2.2z"/>
                </svg>
                <span>${data.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <p>This inquiry was submitted from your <strong>Picnic Utopia</strong> website contact form.</p>
          <p>Please respond within 24 hours to maintain excellent customer service.</p>
          <p><a href="mailto:${data.email}">Reply directly to customer</a> | <a href="tel:${
    data.phone
  }">Call customer</a></p>
        </div>
      </div>
    </body>
    </html>
  `,
};

# SES Email Setup for Picnic Utopia

## Overview

Your contact form now uses AWS SES (Simple Email Service) to send emails through the `ditwaru-aws-helpers` package.

## What Happens When Someone Submits the Contact Form

1. **Business Notification**: You receive a beautifully formatted email with all the inquiry details
2. **Customer Confirmation**: The customer receives a thank you email confirming their inquiry was received

## Setup Required

### 1. Environment Variables

Create or update your `.env.local` file with:

```bash
# Your business email address where you want to receive inquiries
AWS_SES_FROM_EMAIL=your-actual-business@email.com
```

### 2. AWS Configuration

The `ditwaru-aws-helpers` package should handle AWS configuration automatically. Make sure you have:

- AWS credentials configured (access key, secret key)
- SES service enabled in your AWS account
- Email addresses verified in SES (if in sandbox mode)

## Email Templates

The system automatically creates and uses these email templates:

- **Business Notification**: `picnic-contact-form` - Sent to your business email
- **Customer Confirmation**: Simple HTML email sent to the customer

## Testing

1. Fill out the contact form on your website
2. Check your business email for the inquiry notification
3. Check the customer email for the confirmation message

## Troubleshooting

- Check browser console for any errors
- Verify AWS credentials are properly configured
- Ensure SES is enabled and emails are verified (if in sandbox mode)
- Check server logs for any API route errors

## Security

- AWS credentials are kept server-side in the API route
- Form validation prevents empty submissions
- Rate limiting can be added if needed

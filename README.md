# Picnic Utopia 🧺✨

A modern, beautiful website for Picnic Utopia - Luxury Picnic Experiences in Raleigh, NC and surrounding areas.

## ✨ Features

- **Modern Design**: Beautiful, responsive design with smooth animations and hover effects
- **CMS Integration**: Built to integrate with your Nexus CMS pattern using DynamoDB and ditwaru-aws-helpers
- **Performance**: Built with Next.js 15, React 19, and Tailwind CSS 4 for optimal performance
- **Mobile First**: Fully responsive design that works perfectly on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized for search engines

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **CMS**: Integration with Nexus CMS (DynamoDB) via ditwaru-aws-helpers
- **Deployment**: Ready for Vercel or any hosting platform

## 📱 Pages & Components

- **Hero Section**: Eye-catching hero with background image and call-to-action
- **Services**: Beautiful service cards showcasing all picnic packages
- **Gallery**: Interactive image gallery with lightbox functionality
- **Contact**: Contact information, social links, and newsletter signup
- **Navigation**: Fixed navigation with mobile menu

## 🎨 Design Features

- **Color Scheme**: Warm yellows and oranges inspired by summer picnics
- **Typography**: Modern, readable fonts using Geist Sans
- **Animations**: Smooth hover effects, transitions, and micro-interactions
- **Icons**: Custom SVG icons and beautiful visual elements
- **Layout**: Clean, spacious design with proper visual hierarchy

## 🚀 Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file with:

   ```env
   AWS_REGION=us-east-1
   DYNAMODB_TABLE=picnic-utopia-content
   ```

3. **Run Development Server**:

   ```bash
   npm run dev
   ```

4. **Open Browser**:
   Navigate to `http://localhost:3002`

## 🔧 CMS Integration

The site is designed to work with your Nexus CMS pattern using `ditwaru-aws-helpers`:

- **Content Management**: All content is managed through the CMS
- **Dynamic Data**: Services, gallery images, and contact info are fetched from DynamoDB
- **Fallback Content**: Beautiful fallback content when CMS is not available
- **Easy Updates**: Content can be updated through the CMS without code changes
- **Helper Functions**: Uses your published `ditwaru-aws-helpers` package for seamless integration

### CMS Data Structure

The site expects content to be organized in your CMS as pages with sections:

- **Hero Page**: Contains title, subtitle, description, CTA, and background image
- **Services Page**: Contains service information and pricing
- **Gallery Page**: Contains image URLs and captions
- **Contact Page**: Contains contact details and social links

## 📸 Image Sources

Currently using high-quality Unsplash images for:

- Hero background
- Service package images
- Gallery images

These can be replaced with actual picnic photos through the CMS.

## 🎯 Next Steps

1. **Set up DynamoDB table** for content management
2. **Create picnic-utopia application** in your Nexus CMS
3. **Add real images** from actual picnic setups
4. **Implement booking system** integration
5. **Add analytics** and tracking
6. **Set up email marketing** for newsletter signups

## 🌟 Why This Design?

- **Modern & Professional**: Reflects the luxury nature of the picnic services
- **User Experience**: Easy navigation and clear call-to-actions
- **Mobile Optimized**: Most users will browse on mobile devices
- **Performance**: Fast loading times for better user engagement
- **SEO Friendly**: Proper structure for search engine optimization

## 📞 Support

For questions or support, contact the development team or refer to the Nexus CMS documentation.

---

Built with ❤️ using Next.js, Tailwind CSS, and ditwaru-aws-helpers

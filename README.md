# PMCell B2B eCommerce Platform

Modern B2B eCommerce platform built with Next.js, Prisma, and Supabase, adapted from the original electronics eCommerce project for business-to-business sales.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS, DaisyUI
- **Deployment**: Vercel

## Features

### Current Features (from base project)
- 🛍️ Product catalog with categories
- 🔍 Advanced search and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication and registration
- 📱 Responsive design
- 💳 Checkout process
- 📊 Admin dashboard
- 📦 Order management
- ❤️ Wishlist functionality

### Planned B2B Features
- 🏢 Company/organization management
- 👥 Multi-user accounts per company
- 💰 Custom pricing per client
- 📊 Bulk ordering capabilities
- 📈 Advanced reporting and analytics
- 🔐 Role-based permissions
- 📋 Quote requests and approvals
- 🔄 Integration with existing ERP systems

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nycolasmancini/pmcell-b2b-ecommerce.git
cd pmcell-b2b-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy the database URL and API keys

4. **Configure environment variables**
```bash
cp .env.example .env
```
Edit `.env` with your Supabase credentials:
```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. **Set up the database**
```bash
npx prisma db push
npx prisma db seed  # Optional: seed with demo data
```

6. **Start the development server**
```bash
npm run dev
```

7. **Open the application**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## Database Schema

The application uses Prisma with PostgreSQL (Supabase) and includes the following models:
- **Product**: Product catalog with categories, pricing, and inventory
- **Category**: Product categorization
- **User**: User authentication and roles
- **Customer_order**: Order management
- **Wishlist**: User wishlist functionality
- **Image**: Product image management

## Deployment

### Vercel Deployment

1. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on push to main branch

2. **Environment Variables for Production**
   - `DATABASE_URL`: Your Supabase database URL
   - `NEXTAUTH_SECRET`: Random secret for NextAuth
   - `NEXTAUTH_URL`: Your Vercel domain URL
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Admin dashboard routes
│   ├── api/              # API routes
│   ├── cart/             # Shopping cart page
│   ├── product/          # Product pages
│   └── ...
├── components/           # Reusable React components
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── utils/               # Utility functions
└── ...
```

## Development Roadmap

### Phase 1: B2B Core Features (In Progress)
- [ ] Company management system
- [ ] Multi-user roles and permissions
- [ ] Custom pricing per client

### Phase 2: Advanced B2B Features
- [ ] Bulk ordering and quotes
- [ ] Advanced reporting dashboard
- [ ] Integration with existing data sources

### Phase 3: Enterprise Features
- [ ] API integrations
- [ ] Advanced security features
- [ ] Multi-language support

## Contributing

This project is being developed for PMCell's B2B sales platform. For feature requests or bug reports, please create an issue in the repository.

## License

This project is based on the open-source electronics eCommerce project by [Kuzma02](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS) and is adapted for B2B use cases.

## Original Project Credits

Original project: [Electronics eCommerce Shop With Admin Dashboard](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS)
- Created by: Kuzma02 and Bojan Cesnak
- License: MIT
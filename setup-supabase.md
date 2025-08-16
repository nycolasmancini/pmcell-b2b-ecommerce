# Supabase Setup Guide

## Step 1: Create .env file

Copy the credentials from your Supabase project and update the .env file:

```bash
cp .env.example .env
```

Then edit `.env` with your Supabase credentials:

```env
# Supabase Database URL (from Settings > Database > Connection string)
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# NextAuth Configuration
NEXTAUTH_SECRET="your-random-secret-key-here-32-chars-minimum"
NEXTAUTH_URL="http://localhost:3000"

# Supabase Configuration (from Settings > API)
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key-here"
```

## Step 2: Install dependencies

```bash
npm install
```

## Step 3: Set up database schema

```bash
npx prisma db push
```

## Step 4: Generate Prisma client

```bash
npx prisma generate
```

## Step 5: Seed database (optional)

```bash
npm run seed
```

## Step 6: Start development server

```bash
npm run dev
```

## Troubleshooting

### Common Issues:

1. **Connection Error**: Check if DATABASE_URL is correct
2. **Auth Error**: Verify NEXTAUTH_SECRET is set
3. **API Error**: Confirm Supabase URL and keys are correct

### Verify Setup:

1. Check if Prisma can connect: `npx prisma db push`
2. View database in Supabase dashboard
3. Test API routes at `http://localhost:3000/api/`
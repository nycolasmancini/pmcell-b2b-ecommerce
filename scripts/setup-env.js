#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🚀 PMCell B2B eCommerce - Supabase Setup\n');

// Generate a random NextAuth secret
const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Function to prompt for user input (simplified version for demo)
const createEnvFile = () => {
  const envTemplate = `# Supabase Database URL
# Get this from: Supabase Dashboard > Settings > Database > Connection string > URI
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# NextAuth Configuration
NEXTAUTH_SECRET="${generateSecret()}"
NEXTAUTH_URL="http://localhost:3000"

# Supabase Configuration
# Get these from: Supabase Dashboard > Settings > API
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-SUPABASE-ANON-KEY]"

# Production URLs (update when deploying)
# NEXTAUTH_URL="https://your-vercel-app.vercel.app"
`;

  const envPath = path.join(process.cwd(), '.env');
  
  if (fs.existsSync(envPath)) {
    console.log('⚠️  .env file already exists. Creating .env.backup');
    fs.copyFileSync(envPath, path.join(process.cwd(), '.env.backup'));
  }

  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env file with template');
  console.log('📝 Please update the following values in .env:');
  console.log('   - DATABASE_URL (from Supabase)');
  console.log('   - NEXT_PUBLIC_SUPABASE_URL (from Supabase)');
  console.log('   - NEXT_PUBLIC_SUPABASE_ANON_KEY (from Supabase)');
};

const showInstructions = () => {
  console.log('\n📋 Next Steps:');
  console.log('1. Create a Supabase project at https://supabase.com');
  console.log('2. Update .env file with your Supabase credentials');
  console.log('3. Run: npm install');
  console.log('4. Run: npm run db:push');
  console.log('5. Run: npm run db:seed');
  console.log('6. Run: npm run dev');
  console.log('\n🎉 Your B2B eCommerce platform will be ready!');
};

// Main execution
try {
  createEnvFile();
  showInstructions();
} catch (error) {
  console.error('❌ Error setting up environment:', error.message);
  process.exit(1);
}
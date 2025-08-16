import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Laptops' },
      update: {},
      create: { name: 'Laptops' }
    }),
    prisma.category.upsert({
      where: { name: 'Smartphones' },
      update: {},
      create: { name: 'Smartphones' }
    }),
    prisma.category.upsert({
      where: { name: 'Headphones' },
      update: {},
      create: { name: 'Headphones' }
    }),
    prisma.category.upsert({
      where: { name: 'Cameras' },
      update: {},
      create: { name: 'Cameras' }
    }),
    prisma.category.upsert({
      where: { name: 'Tablets' },
      update: {},
      create: { name: 'Tablets' }
    })
  ])

  console.log('✅ Categories created')

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@pmcell.com' },
    update: {},
    create: {
      email: 'admin@pmcell.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password"
      role: 'admin'
    }
  })

  console.log('✅ Admin user created')

  // Create sample products
  const sampleProducts = [
    {
      title: 'MacBook Pro 16"',
      slug: 'macbook-pro-16',
      price: 299999, // R$ 2999.99 (in cents)
      description: 'Apple MacBook Pro 16-inch with M2 Pro chip, 16GB RAM, 512GB SSD',
      manufacturer: 'Apple',
      inStock: 10,
      categoryId: categories[0].id, // Laptops
      mainImage: '/laptop 1.webp',
      rating: 5
    },
    {
      title: 'iPhone 15 Pro',
      slug: 'iphone-15-pro',
      price: 899999, // R$ 8999.99
      description: 'iPhone 15 Pro with A17 Pro chip, 128GB storage, Titanium finish',
      manufacturer: 'Apple',
      inStock: 25,
      categoryId: categories[1].id, // Smartphones
      mainImage: '/smart phone 1.png',
      rating: 5
    },
    {
      title: 'Sony WH-1000XM5',
      slug: 'sony-wh1000xm5',
      price: 159999, // R$ 1599.99
      description: 'Premium noise-canceling wireless headphones with 30-hour battery',
      manufacturer: 'Sony',
      inStock: 15,
      categoryId: categories[2].id, // Headphones
      mainImage: '/headphones 1.png',
      rating: 4
    },
    {
      title: 'Canon EOS R6 Mark II',
      slug: 'canon-eos-r6-mark2',
      price: 899999, // R$ 8999.99
      description: 'Full-frame mirrorless camera with 24.2MP sensor and 4K video',
      manufacturer: 'Canon',
      inStock: 5,
      categoryId: categories[3].id, // Cameras
      mainImage: '/camera 1.png',
      rating: 5
    },
    {
      title: 'iPad Air 5th Gen',
      slug: 'ipad-air-5th-gen',
      price: 349999, // R$ 3499.99
      description: 'iPad Air with M1 chip, 10.9-inch Liquid Retina display, 64GB',
      manufacturer: 'Apple',
      inStock: 20,
      categoryId: categories[4].id, // Tablets
      mainImage: '/tablet 1 1.png',
      rating: 4
    },
    {
      title: 'Dell XPS 13',
      slug: 'dell-xps-13',
      price: 199999, // R$ 1999.99
      description: 'Ultra-thin laptop with Intel Core i7, 16GB RAM, 512GB SSD',
      manufacturer: 'Dell',
      inStock: 12,
      categoryId: categories[0].id, // Laptops
      mainImage: '/laptop 2.webp',
      rating: 4
    },
    {
      title: 'Samsung Galaxy S24 Ultra',
      slug: 'samsung-galaxy-s24-ultra',
      price: 749999, // R$ 7499.99
      description: 'Flagship smartphone with S Pen, 200MP camera, 256GB storage',
      manufacturer: 'Samsung',
      inStock: 18,
      categoryId: categories[1].id, // Smartphones
      mainImage: '/smart phone 2.png',
      rating: 5
    },
    {
      title: 'Bose QuietComfort 45',
      slug: 'bose-quietcomfort-45',
      price: 129999, // R$ 1299.99
      description: 'Wireless noise-canceling headphones with superior comfort',
      manufacturer: 'Bose',
      inStock: 22,
      categoryId: categories[2].id, // Headphones
      mainImage: '/headphones 2.png',
      rating: 4
    }
  ]

  for (const productData of sampleProducts) {
    await prisma.product.upsert({
      where: { slug: productData.slug },
      update: {},
      create: productData
    })
  }

  console.log('✅ Sample products created')
  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
import prisma from "@/db";

export const productSelect = {
  id: true,
  sku: true,
  name: true,
  totalWeight: true,
  makingChargesPerGram: true,
  goldRate: true,
  price: true,
  description: true,
  filterByGender: true,
  metalType: true,
  metalColor: true,
  ringSize: true,
  type: true,
  image: true,
}

export async function Products(filters = {}) {
  console.log('This is filter',filters)
  let where = `1=1`;

  // Gender Query
  if (filters?.gender) {
    where += ` AND filter_by_gender = '${filters.gender}'`;
  }
  // End

  // Metal Type Query 
  if (filters['metal-type']) {
    where += ` AND metal_type IN (${filters['metal-type'].split(',').map(v => `'${v}'`).join(',')})`;
  }
  // End

  // Metal Color Query
  if(filters['metal-color']) {
    where += `AND metal_color in (${filters['metal-color'].split(',').map(x => `'${x}'`).join(',')})`;
  }
  // End
  
  

  return await prisma.$queryRawUnsafe(`SELECT * FROM product WHERE ${where}`);
}


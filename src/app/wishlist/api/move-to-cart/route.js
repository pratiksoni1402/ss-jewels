export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { AddtoCart } from "@/db/repositories/cart";
export async function POST(request) {
  const requestBody = await request.json();
  const moveProductToCart = await AddtoCart(requestBody);
  return Response.json({ moveProductToCart });
}
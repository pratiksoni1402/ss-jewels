'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { PRODUCT_MEDIA } from "@/lib/constants/images";
import Image from "next/image";
import ProductSkeleton from "../_component/skeleton";
import { Loader2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IndianRupee } from 'lucide-react';
import './style.css';
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductDetail({ params }) {
  const router = useRouter();
  const [isEngraving, setEngraving] = useState(false);
  const [addTocart, setAddToCart] = useState(false);
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [selectedRingSize, setSelectedRingSize] = useState('');
  const [engravingChecked, setEngravingChecked] = useState(false);
  const [selectedFont, setSelectedFont] = useState('');
  const [engravingText, setEngravingText] = useState('');
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  // Fetch Product and its Detail
  const { data: product } = useQuery({
    queryKey: ['productDetail'],
    queryFn: () =>
      axios.get(`/product-detail/api/get-product-detail/${params['slug']}`)
        .then((response) => {
          return response.data.productData
        })
        .catch((error) => {
          console.log("Error", error)
        })
  });
  // End


  const ringSizeArray = product?.ringSize?.split(',')
  const metalColorType = product?.metalColor?.split('-')
  const formattedColor = metalColorType?.map(metalColorType => metalColorType.charAt(0).toUpperCase() + metalColorType.slice(1)).join(' ');

  // Handle Opening and Closing of Engraving Form
  const handleForm = (event) => {
    setEngraving(!isEngraving)
    const { checked } = event.target;
    setEngravingChecked(checked);
  }
  // End



  // Handle Ring Size if Applicable
  const handleRingSize = (size) => {
    setSelectedRingSize(size);
  }
  console.log(`Selected Ring Size ${selectedRingSize}`)
  // End

  // Handle Font Change
  const handleFontChange = (value) => {
    setSelectedFont(value);
    console.log("Font is selected", value)
  }
  // End

  console.log("This is engraved text", engravingText)

  // Add To Wishlist
  const handleAddtoWishlist = (id, sku) => {
    setAddToWishlist(true);
    axios.post('/product-detail/api/add-to-wishlist', {
      id,
      sku,
    })
      .then((response) => {
        queryClient.invalidateQueries('wishlistCount');
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error", error)
      })
      .finally(() => {
        setAddToWishlist(false);
      })
  }

  // End

  // Add To Cart
  const handleAddtoCart = (id, sku, selectedRingSize, quantity = 1) => {

    !selectedRingSize ? (
      setAddToCart(false),
      toast.error("Please Select Ring Size")

    ) : engravingChecked == true && engravingText == '' ? (
      setAddToCart(false),
      toast.error("Engraving Text Field cannot be Empty")

    ) : engravingChecked == true && engravingText.length > 10 ? (
      setAddToCart(false),
      toast.error("Maximum 10 Characters are allowed")
    ) : (

      setAddToCart(true),
      axios.post('/product-detail/api/add-to-cart', {
        id,
        sku,
        ringSize: parseFloat(selectedRingSize),
        engravingText: engravingText,
        quantity: quantity,
      })
        .then((response) =>
          router.push('/cart')),
      queryClient.invalidateQueries('cartCount')
        .catch((error) => console.log("Error while adding product to cart ", error))
        .finally(() => setAddToCart(false))
    )
  }
  // End

  // Show Skeleton Till Product Detail Fetching 
  if (!product) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    )
  }
  // End

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="col">
            <div className="main-image sticky top-5">
              <Image src={`${PRODUCT_MEDIA}/${product?.image}`} alt={product?.name} width={564} height={564} />
            </div>
          </div>

          <div className="col">
            <div className="description">
              <div className="details">
                <span className="caption">SKU:</span>
                <span className="value"> {product?.sku}</span>
              </div>

              <div className="details">
                <span className="font-crimson font-medium text-3xl">{product?.name}</span>
              </div>

              <div className="details">
                <div className="leading-5 pb-2 font-roboto text-base">{product?.description}</div>
              </div>

              <div className="details flex items-center ">
                <span><IndianRupee size={16} /></span>
                <span className="text-lg font-roboto font-semibold">{product?.price}</span>
              </div>

              <div className="details">
                <span className="caption">Making Charges:</span>
                <span className="value"> {product?.makingChargesPerGram}/- per gram</span>
              </div>

              <div className="details">
                <span className="caption">Weight:</span>
                <span className="value"> {product?.totalWeight} gram</span>
              </div>

              <div className="details">
                <span className="caption">Metal Purity:</span>
                <span className="value"> {product?.metalType}</span>
              </div>

              <div className="details">
                <span className="caption">Metal Color:</span>
                <span className="value"> {formattedColor}</span>
              </div>

              <div className="details flex items-center">
                <span className="caption">Hallmark:</span>
                <span className="value pl-1"> BIS Hallmarked</span>
                <span className="pl-2">
                  <Image src='/uploads/images/logo/bis-hallmark.svg' alt="BIS Hallmark" width={30} height={30} />
                </span>
              </div>

              <div className="details ring-size">
                <span className="caption pt-2">Ring Size:</span>
                <Select onValueChange={handleRingSize}>
                  <SelectTrigger className="w-[180px] rounded-none font-roboto text-base border-primary">
                    <SelectValue placeholder="Select Ring Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      ringSizeArray?.map((size, index) => (
                        <SelectItem value={size} key={size} className='hover:text-white text-accent'>{size}</SelectItem>

                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="engraving-section pb-3 pt-4">
              {
                product?.isEngraveable == 0 ? (
                  <div>
                    <div class="checkbox-container">
                      <input type="checkbox" checked={isEngraving} className="engraving-checkbox" onChange={handleForm} id="engraving" name="engraving" value="text" />
                      <label htmlFor="engraving" className="engraving-label font-roboto hover:cursor-pointer text-base font-semibold text-accent">
                        Add Engraving (Free)
                      </label>
                    </div>

                    <div>
                      {
                        isEngraving && (
                          <div className="flex items-center gap-5 mt-2 mb-4">
                            <div>
                              <Select onValueChange={handleFontChange}>
                                <SelectTrigger className="w-[180px] border-primary text-base font-roboto text-accent rounded-none">
                                  <SelectValue placeholder="Select Engraving Style" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="script" >Script Style</SelectItem>
                                  <SelectItem value="serif">Serif Style</SelectItem>
                                  <SelectItem value="block">Block Style</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <input type="text" placeholder="Engraving Text" name="engraving text" onChange={(e) => setEngravingText(e.target.value)} className={`h-10 pl-2 outline-0 border border-primary rounded-none ${selectedFont === 'script' ? 'font-hind' : ''} ${selectedFont === 'serif' ? 'font-kalam' : ''} ${selectedFont === 'block' ? 'font-lora' : ''}`} value={engravingText} />
                            </div>
                            {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
                          </div>
                        )
                      }
                    </div>
                  </div>
                ) : (
                  <div className="hidden">

                  </div>
                )
              }
            </div>
            <div className="actions ">

              {
                addTocart ? (
                  <Button type='submit' className="w-full  rounded-none bg-secondary mb-5 border border-secondary text-white hover:text-accent font-roboto text-base" disabled={true}>
                    <Loader2Icon className='animate-spin mr-1' />
                    ADD TO CART</Button>
                ) : (
                  <Button className='w-full  rounded-none bg-primary mb-5 hover:bg-secondary text-white font-roboto text-base' onClick={() => handleAddtoCart(product.id, product.sku, selectedRingSize)}>ADD TO CART</Button>
                )
              }

              {
                addToWishlist ? (
                  <Button className='w-full bg-white border rounded-none mb-5 bg-secondary border-secondary hover:text-white text-accent font-roboto text-base' disabled={true}>
                    <Loader2Icon className='animate-spin mr-1' />
                    ADD TO WISHLIST
                  </Button>
                ) : (
                  <Button className='w-full bg-white border border-accent rounded-none mb-5 hover:bg-secondary hover:border-secondary hover:text-white text-accent font-roboto text-base' onClick={() => handleAddtoWishlist(product?.id, product?.sku)}>ADD TO WISHLIST</Button>
                )
              }

            </div>
            <div className="shipping-wrapper py-5">
              <div className="flex gap-5">
                <div>
                  <div className="transit flex flex-col justify-center items-center">
                    <span className="p-3  border-2 border-[#3c2f27] rounded-full">
                      <Image src='/uploads/images/logo/in-transit.svg' alt='Transit' className="w-8 h-8" width={20} height={32} />
                    </span>
                    <span>
                      <Image src='/uploads/images/logo/shipping.svg' alt='Steps' className=" w-4 h-44" width={20} height={50} />
                    </span>
                  </div>
                </div>
                <div className="information">
                  <div className="heading">
                    <h2 className="font-crimson text-accent text-2xl">FREE 3 DAY SHIPPING</h2>
                    <span className="font-roboto text-accent text-base">on all India Orders</span>
                  </div>
                  <div className="order mt-6">
                    <h2 className="font-crimson text-accent  text-2xl">ORDER BY:</h2>
                    <span className="font-roboto text-accent text-base">5PM EST Monday, February 12</span>
                  </div>
                  <div className="order mt-7">
                    <h2 className="font-crimson text-accent  text-2xl">RECEIVE BY:</h2>
                    <span className="font-roboto text-accent text-base">5PM EST THRUSDAY, February 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react";
import { CATEGORY_MEDIA } from "@/lib/constants/images";
import './style.css';
export default function Megamenu() {
  const [ringhovered, setRingHovered] = useState();
  const [earringHovered, setEarringHovered] = useState();
  const [necklaceHovered, setNecklaceHovered] = useState();
  const [braceletHovered, setBraceletHovered] = useState();
  return (
    <div className="mega-menu">
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger' title='Rings'>
              <span title="Rings" className="make-bold-props">Rings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className=" grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-engagement.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=engagement-rings' className="flex items-center">
                        <span>Engagement</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=couple-rings' className="flex items-center">
                        <span>Couple Rings</span>
                      </Link>
                    </li>

                    {/* <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-navratna.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=navratna-rings' className="flex items-center">
                        <span>Classic</span>
                      </Link>
                    </li> */}

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-mangalsutra.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Three Stone Rings</span>
                      </Link>
                    </li>

                  </ul>
                  <div className="grid grid-cols-1">
                    <div className="shop-by-gender">
                      <h2 className="inner-heading">Shop By Gender</h2>
                      <ul className="product-list-wrapper">

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-engagement.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=engagement-rings' className="flex items-center">
                            <span>Women</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=couple-rings' className="flex items-center">
                            <span>Men</span>
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-platinum.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/platinum' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-yellow-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Rose Gold</span>
                      </Link>
                    </li>

                  </ul>
                  <div className="grid grid-cols-1">
                    <div className="shop-by-gender">
                      <h2 className="inner-heading">Featured</h2>
                      <ul className="product-list-wrapper">

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-engagement.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=engagement-rings' className="flex items-center">
                            <span>Unique Rings</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=couple-rings' className="flex items-center">
                            <span>Gold Rings</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=couple-rings' className="flex items-center">
                            <span>Eternity Rings</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=couple-rings' className="flex items-center">
                            <span>Luxury High Rings</span>
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-span-3">
                  {
                    ringhovered ? (

                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center w-full">
                          <Image src={ringhovered} alt="Rings" width={300} height={300} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src='/uploads/images/category-images/silver.png' alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Gemstone Rings</h2>
                  <ul className="product-list-wrapper">


                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/blue-sapphire-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Blue Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/emerald-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Emerald </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/aquamarine-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Aquamarine </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/morganite-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Morganite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ruby-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Ruby</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/alexendrite-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/alexandrite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Alexendrite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/pink-sapphire-ring-banner.jpeg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/pink-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Pink Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/yellow-sapphire-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Sapphire</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-3">
                  <div className="image h-full">
                    <Image src='/uploads/images/mega-menu/ring-banner-two.jpg' className="w-full h-[400px]" alt="Rings" width={564} height={705} />
                  </div>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className=' menu-trigger'>
              <span title="Earrings" className="make-bold-props ">Earrings</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='w-full menu-content'>
              <div className="section-one grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list">
                      <Link href='/engagement-rings' className="flex items-center" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/all-earring.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                        <span>Studs</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-drop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/solitaire-rings' className="flex items-center">
                        <span>Drop n Dangler</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-solitaire.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/casual-rings' className="flex items-center">
                        <span>Solitaire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-sui-dhaga.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mens-rings' className="flex items-center">
                        <span>Sui Dhaga</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-huggie.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/navratna-rings' className="flex items-center">
                        <span>Huggie</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-hoop.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/mangalsutra-rings' className="flex items-center">
                        <span className="whitespace-nowrap">Hoop</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-jhomka.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Jhomkas</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-tops.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/couple-bands' className="flex items-center">
                        <span>Tops</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">
                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-platinum.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-yellow-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/earring-rose-gold.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/mega-menu/earring.jpg')} >
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Rose Gold</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-3">
                  {
                    earringHovered ? (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center w-full">
                          <Image src={earringHovered} alt="Earrings" width={300} height={300} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src='/uploads/images/mega-menu/earring.jpg' alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Gemstone Earrings</h2>
                  <ul className="product-list-wrapper">


                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/blue-sapphire-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >

                      <Link href='/yellow-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Blue Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/emerald-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Emerald </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/aquamarine-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Aquamarine </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/morganite-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Morganite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/ruby-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Ruby</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/pink-sapphire-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/pink-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Pink Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setEarringHovered(`${CATEGORY_MEDIA}/yellow-sapphire-earring-banner.jpg`)} onMouseLeave={() => setEarringHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Sapphire</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-3">
                  <div className="image h-full">
                    <Image src='/uploads/images/mega-menu/earrings-banner.jpg' className="w-full h-[400px]" alt="Rings" width={564} height={705} />
                  </div>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger'>
              <span title="Bracelets" className="make-bold-props ">Bracelets</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className="section-two grid grid-cols-12 gap-5">

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Style</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-chain.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>Chain</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/cuff-bracelet.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cuff</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-cable.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Cable</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-hinged.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Hinged</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-open-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Open Bangle</span>
                      </Link>
                    </li>
                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-bangle.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center" >
                        <span>Bangle</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Shop By Metal</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-platinum.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Platinum</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-yellow-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Gold</span>
                      </Link>
                    </li>

                    <li className="product-list pt-3" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/bracelet-rose-gold.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/mega-menu/bracelet.jpg')}>
                      <Link href='/' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Rose Gold</span>
                      </Link>
                    </li>


                  </ul>
                </div>

                <div className="col-span-3">
                  {
                    braceletHovered ? (

                      <div className="category-wrapper py-5 flex justify-center h-full items-center">
                        <div className="image">
                          <Image src={braceletHovered} alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-wrapper py-5 flex justify-center h-full items-center w-full">
                        <div className="image">
                          <Image src='/uploads/images/mega-menu/bracelet.jpg' alt="Bracelets" width={300} height={300} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Gemstone Bracelets</h2>
                  <ul className="product-list-wrapper">


                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/blue-sapphire-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Blue Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/emerald-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Emerald </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/aquamarine-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Aquamarine </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/morganite-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Morganite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/ruby-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Ruby</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setBraceletHovered(`${CATEGORY_MEDIA}/alexendrite-bracelet-banner.jpg`)} onMouseLeave={() => setBraceletHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/alexandrite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Alexendrite</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-3">
                  <div className="image h-full">
                    <Image src='/uploads/images/mega-menu/bracelets-banner.jpg' className="w-full h-[400px]" alt="Rings" width={564} height={705} />
                  </div>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='menu-trigger'>
              <span title="Jewellery & Pure Metals" className="make-bold-props gap-5">Jewellery & Pure Metals</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className='menu-content'>
              <div className=" grid grid-cols-12 gap-5">
                <div className="col-span-2">
                  <h2 className="inner-heading">Pure Metals</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/20gm-fine-gold-bar.png`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=engagement-rings' className="flex items-center">
                        <span>Gold Bars</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=couple-rings' className="flex items-center">
                        <span>Gold Coins</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-casual.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=casual-rings' className="flex items-center">
                        <span>Silver Bars</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-navratna.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/products?style=navratna-rings' className="flex items-center">
                        <span>Silver Coins</span>
                      </Link>
                    </li>

                  </ul>

                  <div className="grid grid-cols-1">
                    <div className="content-wrapper">
                      <h2 className="inner-heading">Gifts</h2>
                      <ul className="product-list-wrapper">
                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/20gm-fine-gold-bar.png`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=engagement-rings' className="flex items-center">
                            <span>For Him</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-couple.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=couple-rings' className="flex items-center">
                            <span>For Her</span>
                          </Link>
                        </li>

                        <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-casual.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                          <Link href='/products?style=casual-rings' className="flex items-center">
                            <span>For Kids</span>
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Accessories</h2>
                  <ul className="product-list-wrapper">

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-platinum.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/platinum' className="flex items-center">
                        <span>Nose Pins</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-yellow-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>Anklets</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>Evil Eye</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>Pendants</span>
                      </Link>
                    </li>

                  </ul>
                  <div className="grid grid-cols-1">

                    <h2 className="inner-heading">Silver Sets</h2>
                    <ul className="product-list-wrapper">

                      <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-yellow-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                        <Link href='/yellow-gold' className="flex items-center">
                          <span>Thali</span>
                        </Link>
                      </li>

                      <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                        <Link href='/rose-gold' className="flex items-center">
                          <span>Glass Sets</span>
                        </Link>
                      </li>

                      <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-platinum.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                        <Link href='/platinum' className="flex items-center">
                          <span>Thali and Bowl Sets</span>
                        </Link>
                      </li>

                      <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ring-rose-gold.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                        <Link href='/rose-gold' className="flex items-center">
                          <span>Glass and Jug Sets</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-span-3">
                  {
                    ringhovered ? (

                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center w-full">
                          <Image src={ringhovered} alt="Rings" width={300} height={300} />
                        </div>
                      </div>
                    ) : (
                      <div className="category-image-wrapper py-5 h-full flex items-center justify-center" onL>
                        <div className="image flex justify-center items-center">
                          <Image src='/uploads/images/category-images/silver.png' alt="Earrings" width={400} height={400} />
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="col-span-2">
                  <h2 className="inner-heading">Gemstone Rings</h2>
                  <ul className="product-list-wrapper">


                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/blue-sapphire-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/yellow-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Blue Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/emerald-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/rose-gold' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Emerald </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/aquamarine-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Aquamarine </span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/morganite-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Morganite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/ruby-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Ruby</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/alexendrite-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/alexandrite.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Alexendrite</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/pink-sapphire-ring-banner.jpeg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/pink-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Pink Sapphire</span>
                      </Link>
                    </li>

                    <li className="product-list" onMouseEnter={() => setRingHovered(`${CATEGORY_MEDIA}/yellow-sapphire-ring-banner.jpg`)} onMouseLeave={() => setRingHovered('/uploads/images/category-images/silver.png')} >
                      <Link href='/silver' className="flex items-center">
                        <span>
                          <Image src='/uploads/images/swatch/yellow-sapphire.svg' alt="Platinum" width={20} height={20} />
                        </span>
                        <span className="pl-1">Yellow Sapphire</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="col-span-3">
                  <div className="image h-full">
                    <Image src='/uploads/images/mega-menu/ring-banner-two.jpg' className="w-full h-[400px]" alt="Rings" width={564} height={705} />
                  </div>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef(function ({ className, title, children, ...props }, ref) {
  return (
    React.createElement('li', null,
      React.createElement(NavigationMenuLink, { asChild: true },
        React.createElement('a', Object.assign({
          ref: ref,
          className: cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )
        }, props),
          React.createElement('div', { className: "text-sm font-medium leading-none" }, title),
          React.createElement('p', { className: "line-clamp-2 text-sm leading-snug text-muted-foreground" }, children)
        )
      )
    )
  );
});
ListItem.displayName = "ListItem";


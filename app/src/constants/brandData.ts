import apple_logo from "@/assets/brandLogos/appleLogo.png";
import nike_Logo from "@/assets/brandLogos/nike_logo.png";
import temu_logo from "@/assets/brandLogos/temu_logo.png";
import lego_logo from "@/assets/brandLogos/lego_logo.png";
import tesco_logo from "@/assets/brandLogos/tesco_logo.png";
import boohooman_logo from "@/assets/brandLogos/boohooman_logo.png";
import zara_logo from "@/assets/brandLogos/zara_logo.png";
import fashionNova_logo from "@/assets/brandLogos/fashionNova_logo.png";
import booking_com_logo from "@/assets/brandLogos/booking.com_logo.png";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
}

export const partnerBrands: Brand[] = [
  {
    id: "1",
    name: "Apple",
    logo: apple_logo,
    category: "Electronics",
    description: "Leading electronics retailer with exclusive student discounts",
    website: "https://apple.com"
  },
  {
    id: "2",
    name: "Nike",
    logo: nike_Logo,
    category: "Healthcare",
    description: "NHS worker benefits and wellness products",
    website: "https://nike.com"
  },
  {
    id: "3",
    name: "Temu",
    logo: temu_logo,
    category: "Education",
    description: "Educational resources and student lifestyle savings",
    website: "https://temu.com"
  },
  {
    id: "4",
    name: "Tesco",
    logo: tesco_logo,
    category: "Home & Living",
    description: "Home improvement and lifestyle products",
    website: "https://tesco.com"
  },
  {
    id: "5",
    name: "LEGO",
    logo: lego_logo,
    category: "E-commerce",
    description: "LEGO is a renowned Danish toy company known for its interlocking plastic bricks.",
    website: "https://lego.com"
  },
  {
    id: "6",
    name: "BoohoomaMAN",
    logo: boohooman_logo,
    category: "Books & Media",
    description: "Books, audiobooks, and educational content",
    website: "https://boohooman.com"
  },
  {
    id: "7",
    name: "ZARA",
    logo: zara_logo,
    category: "Fashion",
    description: "Zara is one of the biggest international fashion companies",
    website: "https://zara.com"
  },
  {
    id: "8",
    name: "Fashion Nova",
    logo: fashionNova_logo,
    category: "Fashion",
    description: "Fashion Nova is a trendy fashion brand known for its stylish clothing.",
    website: "https://fashionnova.com"
  },
  {
    id: "9",
    name: "Booking.com",
    logo: booking_com_logo,
    category: "Travel",
    description: "Travel and accommodation booking platform",
    website: "https://booking.com"
  },
  
];

export const getBrandsByCategory = (category: string): Brand[] => {
  return partnerBrands.filter(brand => brand.category === category);
};

export const getBrandCategories = (): string[] => {
  return [...new Set(partnerBrands.map(brand => brand.category))];
};
// =====================
// PROS CARDS
// =====================
import truck from "../public/shipping-fast.png";
import headset from "../public/user-headset.png";
import restock from "../public/restock.png";
import credit from "../public/credit-card-buyer.png";

// =====================
// BEST SELLER CARDS
// =====================
import book1 from "../public/1.png";
import book2 from "../public/2.png";
import book3 from "../public/3.png";
import book4 from "../public/4.png";
import book5 from "../public/5.png";
import book6 from "../public/6.png";

// =====================
// ICONS
// =====================
import marker from "../public/marker.png";
import phone from "../public/phone.png";
import comment from "../public/comment.png";


import { LuUser } from "react-icons/lu";
import { TbClockHour3 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
// =====================
// DATA
// =====================

export const bestSeller = [book1, book2, book3, book4, book5, book6];

export const prosList = [
  {
    img: truck,
    heading: "Fast & Reliable Shipping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    img: credit,
    heading: "Secure Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    img: restock,
    heading: "Easy Returns",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    img: headset,
    heading: "24/7 Customer Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
];

export const missionList = [
  {
    heading: "Quality Selection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    heading: "Exceptional Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
  {
    heading: "Set Up Stores",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.",
  },
];

export const iconsList = [
  {
    img: phone,
    title: "01123456789",
  },
  {
    img: comment,
    title: "example@gmail.com",
  },
  {
    img: marker,
    title: "Cairo, Egypt",
  },
];

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "About Us",
    path: "/about",
  },
];

// =====================
// SINGLE BOOK
// =====================

export const singleBookImages = [
  {
    id: 1,
    src: book1,
  },
  {
    id: 2,
    src: "../public/bookback.png",
  },
];

export const bottomSectionSingleBookTabs = [
  {
    id: 1,
    tabName: "Product Details",
  },
  {
    id: 2,
    tabName: "Customer Reviews",
  },
  {
    id: 3,
    tabName: "Recommended For You",
  },
];

// =====================
// DROPDOWN
// =====================

export const dropdownList = [
  {
    id: 1,
    icon: LuUser,
    label: "Profile",
  },
  {
    id: 2,
    icon: TbClockHour3,
    label: "Order History",
  },
  {
    id: 3,
    icon: CiLocationOn,
    label: "Address",
  },
  {
    id: 4,
    icon: AiOutlineExclamationCircle,
    label: "Help",
  },
  {
    id: 5,
    icon: MdOutlineLogout,
    label: "Logout",
  },
];
export const paginationBtns = [
  {
    id: 1,
    pageNumber: 1,
  }, {
    id: 2,
    pageNumber: 2,
  },
  {
    id: 3,
    pageNumber: 3,
  },
 
]
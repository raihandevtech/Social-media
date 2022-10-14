import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import raihan from "../assets/images/mern-stack.png";
import { FiHeart } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BiVideo } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiShapeSquare } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";

function Header() {
  return (
    <header className="_header_section">
      <div className="_header_wrap">
        <div className="_header_main">
          <div className="_header_left">
            <div className="_header_logo">
              <Link href="/">
                <Image src={logo} alt='logo' layout="responsive" />
              </Link>
            </div>
          </div>
          <div className="_header_menu">
            <ul className="_header_menu_main">
              <li className="_header_menu_item">
                <Link href="/">
                  <span className="_menu_item_link">
                    <FiHeart className="_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_header_menu_item">
                <Link href="/">
                  <span className="_menu_item_link">
                    <TbUsers className="_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_header_menu_item">
                <Link href="/">
                  <span className="_menu_item_link">
                    <BiVideo className="_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_header_menu_item">
                <Link href="/">
                  <span className="_menu_item_link">
                    <AiOutlineFire className="_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_header_menu_item">
                <Link href="/">
                  <span className="_menu_item_link">
                    <HiOutlineShoppingBag className="_link_icon" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="_header_right">
            <ul className="_header_right_menu">
              <li className="_right_menu_item">
                <Link href="/">
                  <span className="_right_item_link">
                    <BiShapeSquare className="_right_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_right_menu_item">
                <Link href="/">
                  <span className="_right_item_link">
                    <IoMdNotificationsOutline className="_right_link_icon" />
                  </span>
                </Link>
              </li>
              <li className="_right_menu_item">
                <Link href="/">
                  <span className="_right_item_link">
                    <MdOutlineChat className="_right_link_icon" />
                    <span className="_right_link_icon_txt">12</span>
                  </span>
                </Link>
              </li>
            </ul>
            <div className="_header_profile">
                <Link href="/">
                    
            <Image src={raihan} width={200} height={200} objectFit="cover" alt="Raihan"  />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

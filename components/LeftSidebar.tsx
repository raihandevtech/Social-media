import Image from 'next/image';
import Link from 'next/link';
import raihan from '../assets/images/mern-stack.png';
import garlic from '../assets/images/garlic2.jpg';
import { AiOutlineHome } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BiRocket } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

import { BiVideo } from "react-icons/bi";

function LeftSidebar() {
  return (
    <section className="_left_sidebar_section">
        <div className="_left_sidebar_wrap">
            <div className="_sidebar_profile">
                <div className="_sidebar_profile_thumb">
                   <Link href="/">
                    <Image src={raihan} width={200} height={200} objectFit="cover" alt='Raihan'  />
                    </Link>
                    <span className="_thumb_video_icon">
                        <BiVideo className='_icon_img' />
                    </span>
                </div>
                <div className="_sidebar_profile_content">
                    <h3 className="_profile_main_name">Marvin Tomasz!</h3>
                    <span className="_profile_user_name">@the_clivesurreal</span>
                </div>
            </div>
            <div className="_sidebar_menu">
                <ul className="_sidebar_menu_main">
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <AiOutlineHome className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <TbUsers className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Groups</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <FiHeart className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Favorites</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <BiRocket className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Pages</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <GrLocation className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Event Around me</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <AiOutlineCreditCard className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Subscriptions</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="_sidebar_border"></div>
            <div className="_sidebar_menu">
                <ul className="_sidebar_menu_main">
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <AiOutlineSetting className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">Setting</span>
                            </div>
                        </Link>
                    </li>
                    <li className="_menu_main_item">
                        <Link href='/'>
                            <div className="_menu_item_link">
                                <MdLanguage className='_menu_item_link_icon' />
                                <span className="_menu_item_link_txt">English</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="_sidebar_status">
                <h3 className="_sidebar_status_title">
                    My Status
                </h3>
                <p className="_sidebar_status_new_connect_txt">Got New 24 Connections!</p>
                <div className="_sidebar_status_card">
                    <div className="_status_card_thumb">
                    <Image src={garlic} alt="garlic" height={120} width={100} layout='responsive' objectFit='cover' />
                    </div>
                    <div className="_status_card_content">
                        <div className="_card_content_item">
                            <span className="_card_content_item_txt">New Members this Week</span>
                            <span className="_card_content_item_count">1212</span>
                        </div>
                        <div className="_card_content_item">
                            <span className="_card_content_item_txt">Looking to Rendezbous</span>
                            <span className="_card_content_item_count">152</span>
                        </div>
                        <div className="_card_content_item">
                            <span className="_card_content_item_txt">New Photos this Week</span>
                            <span className="_card_content_item_count">1312</span>
                        </div>
                        <div className="_card_content_item">
                            <span className="_card_content_item_txt">New Members this Week</span>
                            <span className="_card_content_item_count">12542</span>
                        </div>
                        <div className="_card_content_item">
                            <span className="_card_content_item_txt">Looking to Rendezvous</span>
                            <span className="_card_content_item_count">1212</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LeftSidebar;
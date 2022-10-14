import Image from 'next/image'
import cocumber from '../assets/images/cocumber1.jpg';
import cocumber2 from '../assets/images/cocumber2.jpg';
import radish from '../assets/images/radish3.jpg';
import {BsCalendarCheck} from 'react-icons/bs';
import {BiTargetLock } from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFlagFill} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';

function RightSidebar() {
  return (
    <section className="_right_sidebar_section">
        <div className="_sidebar_events">
            <div className="_sidebar_container_top">
                <h4 className="_sidebar_container_top_txt">Events & Parties</h4>
                <button className="_sidebar_container_top_btn">+ Add New</button>
            </div>
            <div className="_sidebar_events_card">
                <div className="_sidebar_events_card_thumb">
                <Image
                  src={cocumber}
                  alt="Raihan"
                  width={400}
                  height={220}
                  objectFit="cover"
                  layout="responsive"
                />
                </div>
                <div className="_sidebar_events_card_content">
                    <h4 className="_events_card_content_txt">Marvin McKinney Couple Party</h4>
                    <div className="_events_card_meta">
                        <div className="_events_card_meta_item">
                            <BsCalendarCheck className='_meta_item_icon' />
                            <span className="_meta_item_txt">24.05</span>
                        </div>
                        <div className="_events_card_meta_item">
                            <BiTargetLock className='_meta_item_icon' />
                            <span className="_meta_item_txt">Krakow</span>
                        </div>
                        <div className="_events_card_meta_item">
                            <FaUsers className='_meta_item_icon' />
                            <span className="_meta_item_txt">2/10</span>
                        </div>
                        <div className="_events_card_meta_item">
                            <GrLocation className='_meta_item_icon' />
                            <span className="_meta_item_txt">Betorvile, USA</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="_sidebar_upcomming_events">
            <div className="_sidebar_container_top">
                <h4 className="_sidebar_container_top_txt">Upcomming Events</h4>
                <button className="_sidebar_container_top_btn">Show more</button>
            </div>
            <div className="_upcomming_events_card">
                <div className="_upcomming_events_card_thumb">
                <Image
                  src={cocumber}
                  alt="Raihan"
                  width={60}
                  height={84}
                  objectFit="cover"
                  layout="responsive"
                />
                </div>
                <div className="_upcomming_events_card_content">
                    <h4 className="_upcomming_card_content_title">The Incredibies <AiFillCheckCircle className='_card_content_verifyed' /></h4>
                    <p className="_upcomming_card_content_txt">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Consequatur, asperiores. Necessitatibus excepturi dolorum distinctio error fugiat! Accusantium, excepturi.</p>
                    <div className="_upcomming_card_meta">
                        <div className="_upcomming_card_meta_item">
                            <span className='_meta_item_icon'>@</span>
                            <span className="_meta_item_txt">24.05</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <BsFlagFill className='_meta_item_icon' />
                            <span className="_meta_item_txt">Krakow</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <MdLocationOn className='_meta_item_icon' />
                            <span className="_meta_item_txt">Betorvile, USA</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_upcomming_events_card">
                <div className="_upcomming_events_card_thumb">
                <Image
                  src={radish}
                  alt="Raihan"
                  width={60}
                  height={84}
                  objectFit="cover"
                  layout="responsive"
                />
                </div>
                <div className="_upcomming_events_card_content">
                    <h4 className="_upcomming_card_content_title">The Incredibies Couple Party</h4>
                    <p className="_upcomming_card_content_txt">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Consequatur, asperiores. Necessitatibus excepturi dolorum distinctio error fugiat! Accusantium, excepturi.</p>
                    <div className="_upcomming_card_meta">
                        <div className="_upcomming_card_meta_item">
                            <span className='_meta_item_icon'>@</span>
                            <span className="_meta_item_txt">24.05</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <BsFlagFill className='_meta_item_icon' />
                            <span className="_meta_item_txt">Krakow</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <MdLocationOn className='_meta_item_icon' />
                            <span className="_meta_item_txt">Betorvile, USA</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_upcomming_events_card">
                <div className="_upcomming_events_card_thumb">
                <Image
                  src={cocumber2}
                  alt="Raihan"
                  width={60}
                  height={84}
                  objectFit="cover"
                  layout="responsive"
                />
                </div>
                <div className="_upcomming_events_card_content">
                    <h4 className="_upcomming_card_content_title">The Incredibies <AiFillCheckCircle className='_card_content_verifyed' /></h4>
                    <p className="_upcomming_card_content_txt">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Consequatur, asperiores. Necessitatibus excepturi dolorum distinctio error fugiat! Accusantium, excepturi.</p>
                    <div className="_upcomming_card_meta">
                        <div className="_upcomming_card_meta_item">
                            <span className='_meta_item_icon'>@</span>
                            <span className="_meta_item_txt">24.05</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <BsFlagFill className='_meta_item_icon' />
                            <span className="_meta_item_txt">Krakow</span>
                        </div>
                        <div className="_upcomming_card_meta_item">
                            <MdLocationOn className='_meta_item_icon' />
                            <span className="_meta_item_txt">Betorvile, USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RightSidebar
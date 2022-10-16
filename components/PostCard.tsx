import Image from "next/image";
import cocumber from "../assets/images/cocumber1.jpg";
import raihan from "../assets/images/mern-stack.png";
import { MdClose } from "react-icons/md";
import { BsThreeDots} from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import { VscLiveShare } from "react-icons/vsc";

function PostCard() {
  return (
    
    <div className="_post_card">
    <div className="_post_card_profile_img">
      <Image
        src={raihan}
        alt="Raihan"
        height={300}
        width={300}
        objectFit="cover"
      />
    </div>
    <div className="_post_card_main">
      <div className="_post_card_main_top">
        <div className="_card_top_user_info">
            <h4 className="_card_top_user_name">
              Mr. Incrdble
                <span className="_user_unique_name">@mr-incrdble</span>
            </h4>
            <div className="_card_top_suggested">
              <span className="_suggested_txt">Suggested for you</span>
              <span className="_suggested_time">12</span>
              <span className="_suggested_setting">
                <IoMdSettings className="_setting_icon" />
              </span>
            </div>
        </div>
        <div className="_card_top_btns">
          <button className="_top_btn_item">
            <BiHeart className="_top_btn_icon" />
          </button>
          <button className="_top_btn_item">
            <BsThreeDots className="_top_btn_icon" />
          </button>
          <button className="_top_btn_item">
            <MdClose className="_top_btn_icon _bar" />
          </button>
        </div>
      </div>
      <div className="_post_card_main_content">
        <p className="_post_card_txt">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam facilis a odio illo dignissimos eaque tempora nisi debitis commodi corporis.
      </p>
      <div className="_post_card_thumb">
      <Image
        src={cocumber}
        alt="Raihan"
        width={600}
        height={350}
        objectFit="cover"
        priority
      />
      </div>
      <div className="_post_card_bottom">
        <button className="_post_card_react_btn">
          <BiHeart className="_react_icon" />
          1234 Love
        </button>
        <button className="_post_card_react_btn">
          <GoCommentDiscussion className="_react_icon"  />
          421 Comments
        </button>
        <button className="_post_card_react_btn">
          
        <VscLiveShare className="_react_icon"  />
        4 Share
        </button>
      </div>

      </div>
      
    </div>
  </div>
  )
}

export default PostCard
import Image from "next/image";
import carrot from "../assets/images/carrot2.jpg";
import carrot2 from "../assets/images/carrot3.jpg";
import cocumber from "../assets/images/cocumber1.jpg";
import radish from "../assets/images/radish3.jpg";
import raihan from "../assets/images/mern-stack.png";
import { FiPlus } from "react-icons/fi";
import { MdVideoCameraBack,} from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsCalendarEventFill, BsFillHeartFill} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import PostCard from "./PostCard";

function Feed() {
  return (
    <section className="_feed_section">
      <div className="_feed_wrap">
        <div className="_feed_welcome">
          <h4 className="_feed_welcome_back_txt">Welcome Back.</h4>
          <h4 className="_feed_welcome_Name">Tomasz!</h4>
        </div>
        <div className="_feed_story">
          <div className="_feed_story_create">
            <button className="_create_store_btn">
              <FiPlus className="_store_btn_icon" />
            </button>
            <h4 className="_create_store_txt">Create Shots</h4>
          </div>
          <div className="_feed_story_item">
            <div className="_feed_story_item_thumb">
              <Image
                src={carrot}
                alt="garlic"
                height={157}
                width={100}
                objectFit="cover"
              />
            </div>
            <div className="_feed_story_item_profile">
              <Image
                src={raihan}
                alt="garlic"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="_feed_story_item">
            <div className="_feed_story_item_thumb">
              <Image
                src={carrot2}
                alt="garlic"
                height={157}
                width={100}
                objectFit="cover"
              />
            </div>
            <div className="_feed_story_item_profile">
              <Image
                src={raihan}
                alt="garlic"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="_feed_story_item">
            <div className="_feed_story_item_thumb">
              <Image
                src={cocumber}
                alt="garlic"
                height={157}
                width={100}
                objectFit="cover"
                priority
              />
            </div>
            <div className="_feed_story_item_profile">
              <Image
                src={raihan}
                alt="garlic"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="_feed_story_item">
            <div className="_feed_story_item_thumb">
              <Image
                src={radish}
                alt="garlic"
                height={157}
                width={100}
                objectFit="cover"
              />
            </div>
            <div className="_feed_story_item_profile">
              <Image
                src={cocumber}
                alt="garlic"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="_feed_story_item">
            <div className="_feed_story_item_thumb">
              <Image
                src={cocumber}
                alt="garlic"
                height={157}
                width={100}
                objectFit="cover"
              />
            </div>
            <div className="_feed_story_item_profile">
              <Image
                src={raihan}
                alt="garlic"
                height={300}
                width={300}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="_feed_create_post">
          <div className="_feed_create_post_form">
            <div className="_create_post_profile_img">
              <Image
                src={raihan}
                alt="garlic"
                height={100}
                width={100}
                objectFit="cover"
              />
            </div>
            <input
              type="text"
              placeholder="Whats up?"
              className="_create_post_input"
            />
          </div>
          <div className="_feed_create_post_media">
            <button className="_create_post_media_btn">
              <MdVideoCameraBack className="_media_btn_icom _video" />
              <div className="_media_btn_txt">Live Video</div>
            </button>

            <button className="_create_post_media_btn">
              <FaPhotoVideo className="_media_btn_icom _photo" />
              <div className="_media_btn_txt">Photo/video</div>
            </button>
            <button className="_create_post_media_btn">
              <BsCalendarEventFill className="_media_btn_icom _event" />
              <div className="_media_btn_txt">Event</div>
            </button>
            <button className="_create_post_media_btn">
              <BsFillHeartFill className="_media_btn_icom _heart" />
              <div className="_media_btn_txt">Activity</div>
            </button>
          </div>
        </div>
        <div className="_feed_media_and_posts">
          <div className="_media_and_posts_tabs">
            <button className="_tab_btn _active">1059 POSTS</button>
            <button className="_tab_btn">1058 MEDIA</button>
          </div>
          <div className="_posts_container">
            <div className="_posts_top_bar">
              <div className="_posts_top_bar_recent">
                <h4 className="_top_bar_recent_txt">Recent</h4>
                <div className="_top_bar_recent_btns">
                  <button className="_top_bar_recent_btn_item">
                    <FiSearch className="_recent_btn_icon" />
                  </button>
                  <button className="_top_bar_recent_btn_item">
                    <AiOutlineFolderOpen className="_recent_btn_icon" />
                  </button>
                  <button className="_top_bar_recent_btn_item">
                    <FiBarChart2 className="_recent_btn_icon _bar" />
                  </button>
                </div>
              </div>
              <div className="_posts_top_bar_tags">
                <button className="_posts_tag_btn _active">All 1201</button>
                <button className="_posts_tag_btn">Photo 532</button>
                <button className="_posts_tag_btn">Video 532</button>
              </div>
            </div>
          </div>
        </div>
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}

export default Feed;

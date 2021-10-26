import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAt,
  faEllipsisV,
  faHashtag,
  faLock,
  faPlus,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faCommentDots,
  faComments,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import IconLink from "./IconLink";
import { faSlackHash } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "./Dropdown";
import IconButton from "./IconButton";
import DirectMessageLink from "./DirectMessageLink";
import users from "../mocks/users.json";

const Sidebar = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-72 border-gray-500 border-r">
      <div className="flex items-center justify-start gap-x-2 text-white font-bold text-lg p-4 border-gray-500 border-b hover:bg-black cursor-pointer">
        <h1>Company</h1>
        <FontAwesomeIcon icon={faAngleDown} />
        <button className="ml-auto bg-white rounded-full w-10 h-10 text-black hover:bg-gray-200">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      <div className="sidebar flex flex-col flex-grow text-gray-300 pt-3 pb-3">
        <IconLink to="/" icon={faCommentDots} label="Threads" />
        <IconLink to="/" icon={faComments} label="All DMs" />
        <IconLink to="/" icon={faAt} label="Mentions & reactions" />
        <IconLink to="/" icon={faBookmark} label="Saved items" />
        <IconLink to="/" icon={faSlackHash} label="Slack Connect" />
        <IconLink to="/" icon={faEllipsisV} label="More" />
        <Dropdown
          className="mt-4"
          label="Channels"
          buttons={
            <>
              <IconButton icon={faEllipsisV} />
              <IconButton icon={faPlus} />
            </>
          }
        >
          <IconLink to="/" icon={faHashtag} label="general" nested />
          <IconLink to="/" icon={faHashtag} label="random" nested />
          <IconLink to="/" icon={faHashtag} label="gifs" nested />
          <IconLink to="/" icon={faLock} label="private" nested />
          <IconLink to="/" icon={faLock} label="secret-stuff" nested />
          <IconLink to="/" icon={faPlus} label="Add channels" nested withBg />
        </Dropdown>
        <Dropdown
          className="mt-4"
          label="Direct messages"
          buttons={
            <>
              <IconButton icon={faEllipsisV} />
              <IconButton icon={faPlus} />
            </>
          }
        >
          <DirectMessageLink to="/" label="John Doe" nested online self />
          {users &&
            users.map((user, index) => (
              <DirectMessageLink
                key={user.id}
                to={`/chat/${user.id}`}
                uid={user.id}
                label={user.username}
                nested
                online={user.online}
                selected={index === 3}
              />
            ))}
        </Dropdown>
        <Dropdown
          className="mt-4"
          label="Apps"
          buttons={
            <>
              <IconButton icon={faEllipsisV} />
              <IconButton icon={faPlus} />
            </>
          }
        >
          <IconLink to="/" icon={faPlus} label="Add apps" nested withBg />
        </Dropdown>
      </div>
      <div className="flex p-4 gap-x-2 text-gray-400 border-gray-500 border-t">
        <FontAwesomeIcon className="text-2xl" icon={faPodcast} />
        <p>John Doe, Don Joe...</p>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-auto">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full border cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

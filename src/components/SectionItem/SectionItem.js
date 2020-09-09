import React, { useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { PATHS } from "../../constants";

import queryString from "query-string";
// import DefaultAvatar from "../../assets/images/avatar-01.png";

dayjs.extend(relativeTime)

export default function SectionItem({ post }) {
  const location = useLocation();
  const match = useRouteMatch(PATHS.SEARCH_RESULT);

  const query = useMemo(() => {
    const parsed = queryString.parse(location.search);
    if (parsed.q) {
      return parsed.q.toLowerCase();
    }
  }, [location]);

  const time = dayjs(new Date(post.time_added))
    .locale('vi')
    .fromNow();

  const renderFullname = useMemo(() => {
    if (match && query) {
      const textHTML = post.fullname
        .toLowerCase()
        .split(query).join(`<mark>${query}</mark>`);

      return <Link
        to={PATHS.USER_DETAIL}
        className="ass1-section__name"
        dangerouslySetInnerHTML={{
          __html: textHTML
        }}
      />
    }
    return <Link to={PATHS.USER_DETAIL.replace(":user_id", post.USERID)} className="ass1-section__name">{post.fullname}</Link>
  }, [post, match, query]);

  const renderPostContent = useMemo(() => {
    if (match && query) {
      const textHTML = post.post_content
        .toLowerCase()
        .split(query).join(`<mark>${query}</mark>`);

      return <p
        dangerouslySetInnerHTML={{
          __html: textHTML
        }}
      />
    }
    return <p>{post.post_content}</p>
  }, [post, match, query]);


  if (!post) return null;

  return (
    <div className="ass1-section__item">
      <div className="ass1-section">
        <div className="ass1-section__head">
          <Link to={PATHS.USER_DETAIL} className="ass1-section__avatar ass1-avatar">
            <img src={post.profilepicture} alt="" />
          </Link>
          <div>
            {renderFullname}
            <span className="ass1-section__passed">{time}</span>
          </div>
        </div>
        <div className="ass1-section__content">
          {renderPostContent}
          <div className="ass1-section__image">
            <Link to={PATHS.POST_DETAIL}>
              <img src={post.url_image} alt="" />
            </Link>
          </div>
        </div>
        <div className="ass1-section__footer">
          <Link to={PATHS.POST_DETAIL} className="ass1-section__btn-comment ass1-btn-icon">
            <i className="icon-Comment_Full" /><span>{post.count || 0}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profileContainer}>
  <div className={css.profileInfo}>
    <img className={css.profileImg}
      src={image}
      alt={name}
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileInfoText}>@{tag}</p>
    <p className={css.profileInfoText}>{location}</p>
  </div>

  <ul className={css.profileStatsList}>
    <li className={css.profileStatsListItem}>
      <span>Followers</span>
      <span className={css.profileStatsInfo}>{stats.followers}</span>
    </li>
    <li className={css.profileStatsListItem}>
      <span>Views</span>
      <span className={css.profileStatsInfo}>{stats.views}</span>
    </li>
    <li className={css.profileStatsListItem}>
      <span>Likes</span>
      <span className={css.profileStatsInfo}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile;
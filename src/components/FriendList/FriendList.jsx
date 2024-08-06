import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'
const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendsList}>
        {friends.map(friend => {
          return (
            <li key={friend.id}>
              <FriendListItem
                friendName={friend.name}
                friendAvatarURL={friend.avatar}
                friendStatus={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default FriendList;
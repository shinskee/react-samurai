import React from "react";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  followingInProgress,
  unFollow,
  follow,
  ...props
}) {
  return (
    <div className={styles.userPage}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.users}>
          {users.map((user) => (
            <User key={user.id} user={user} 
                followingInProgress={followingInProgress} unFollow={unFollow} follow={follow} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;

// props.setUsers([
//     {followed: false, id: 1, name: 'Mikasa Ackerman', img: 'https://i.getgems.io/ZFMFnCz5ltFS-e0evoJzwxglp_tHJSb2U01G4MWilSo/rs:fill:512:512:1/g:ce/czM6Ly9nZXRnZW1zLXMzL3VzZXItbWVkaWEvMjMtMDMtMjAyNC8zMzgzMTM3LzUxNzUwMC5qcGc', status: 'So good', location: {city: 'Wall Rose', country: 'Erudia'}},
//     {followed: true, id: 2, name: 'Asuna Yuuki', img: 'https://avatars.akamai.steamstatic.com/a084594365dabb21c402405052872f37a00604bf_full.jpg', status: "To keep doing your best, up until the very end.", location: {city: 'Tokyo', country: 'Japan'}},
//     {followed: true, id: 3, name: 'Violet Evergarden', img: 'https://avatars.mds.yandex.net/i?id=19b83c40d363b20090a63104f8addaee1fd8e7fb-12648808-images-thumbs&n=13', status: "I want to know what 'I love you' means…", location: {city: 'Leiden', country: 'Leidenschaftlich'}},
//     {followed: false, id: 4, name: 'Emilia エミリア', img: 'https://i.pinimg.com/736x/15/6c/11/156c11c51a49e79ac11ec33f1bcb9122.jpg', status: 'My name is Emilia. Just Emilia.', location: {city: 'Lugunica', country: 'Royal Selection'}},
//     {followed: false, id: 5, name: 'Power パワー', img: 'https://sun9-36.userapi.com/s/v1/ig2/m9vA-qemtX5GBe6u3tKPkikC5H8VQOPzsMRWuubGAEWAcQvlJJsGoXd7xaeilG233VBD9GOZ6Cnf8ER3hqcoVLaZ.jpg?size=200x200&quality=95&crop=440,60,1628,1628&ava=1', status: 'Such a foolish reason', location: {city: 'Tokyo', country: 'Japan'}}
// ])

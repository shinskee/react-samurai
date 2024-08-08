import React from "react";
import styles from "./Users.module.css";
import Follow from "../../img/follow.svg?react";
import Unfollow from "../../img/unfollow.svg?react";
import userPhoto from "../../img/userPhoto.jpg";
import { NavLink } from "react-router-dom";


function User({
  user,
  followingInProgress,
  unFollow,
  follow
}) {
  return (
            <div className={styles.user}>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt=""
                  />
                </NavLink>
              </div>
              <div className={styles.body}>
                <h4>{user.name}</h4>
                <p>{user.status}</p>
              </div>
              <div className={styles.location}>
              {user.followed ? (
                <button
                  disabled={followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    unFollow(user.id);
                  }}
                >
                  <Unfollow className={styles.button} />
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  <Follow className={styles.button} />
                </button>
              )}
            </div>
        </div>
  );
}

export default User;
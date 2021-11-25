import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { getUserRepositories } from "../services/github";

export const Repositories = (props: { username: string }) => {
  const [repos, setRepos] = useState<UserRepository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getUserRepositories(props.username)
      .then((repos) => {
        if (mounted) {
          setRepos(repos);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.error(e);
        if (mounted) {
          setRepos([]);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [props.username]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className={style.repos}>
      {repos.length ? (
        <React.Fragment>
          <h3>repositories {repos.length}</h3>
          <ul>
            {repos.map((repo, index) => (
              <li key={repo.id} className={style.repo}>
                <strong>{repo.name}</strong>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <div>No repositories found for this user</div>
      )}
    </div>
  );
};

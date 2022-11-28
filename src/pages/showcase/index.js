import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Axios from "axios";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function ShowcaseNew() {
  const [listOfRepository, setListOfRepository] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(
      "https://api.github.com/users/kecci/repos?sort=updated&direction=desc&per_page=40&page=1"
    ).then((response) => {
      if (response.data) {
        setListOfRepository(response.data);
      }
    });
  }, []);

  const filteredRepository = listOfRepository.filter((repo) => {
    return repo.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Layout title="Showcase" description="Showcase Page">
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Go..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="container margin-top--lg margin-bottom--lg">
        <ul
          className="row"
          style={{
            listStyleType: "none",
          }}
        >
          {filteredRepository.map((repo) => {
            console.log(repo);
            return (
              <li className="col col--3 margin-bottom--lg">
                <div className={clsx("card")}>
                  <div className={clsx("card__image")}>
                    <a href={repo.html_url}>
                      <img src={repo.owner.avatar_url} alt={repo.name} />
                    </a>
                  </div>

                  <div className="card__body">
                    <a href={repo.homepage}>
                      <h3>{repo.name}</h3>
                    </a>
                    <p>
                      Description:{" "}
                      {repo.description != null && repo.description != ""
                        ? repo.description
                        : "-"}
                    </p>
                    <p>
                      Language:{" "}
                      {repo.language != null && repo.language != ""
                        ? repo.language
                        : "-"}
                    </p>
                  </div>
                  <div className="card__footer">
                    <p>Author: Kecci</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

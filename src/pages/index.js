import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className="content-homeCard">
            <div className="homeCard">
              <h2 className="homeCard-title">Panda Intro - 5m ⏱️</h2>
              {/* <ul class="list">
                <li class="listItem">Free</li>
                <li class="listItem">Architecture</li>
                <li class="listItem">Lorem</li>
              </ul> */}
              <a class="link" href="/docs/intro">
                GO !
              </a>
            </div>
            <div className="homeCard">
              <h2 className="homeCard-title">Panda Plus - 10m ⏱️</h2>
              {/* <ul class="list">
                <li class="listItem">Free</li>
                <li class="listItem">Architecture</li>
                <li class="listItem">Lorem</li>
              </ul> */}
              <a class="link" href="/docs/category/-tutorial---plus">
                GO !
              </a>
            </div>
            <div className="homeCard">
              <h2 className="homeCard-title">Panda Firebase - 20m ⏱️</h2>
              {/* <ul class="list">
                <li class="listItem">Free</li>
                <li class="listItem">Architecture</li>
                <li class="listItem">Lorem</li>
              </ul> */}
              <a class="link" href="/docs/category/-tutorial---firebase">
                GO !
              </a>
            </div>
            <div className="homeCard">
              <h2 className="homeCard-title">Panda Stripe - 30m ⏱️</h2>
              {/* <ul class="list">
                <li class="listItem">Free</li>
                <li class="listItem">Architecture</li>
                <li class="listItem">Lorem</li>
              </ul> */}
              <a class="link" href="/docs/category/-tutorial---stripe">
                GO !
              </a>
            </div>
            <div className="homeCard">
              <h2 className="homeCard-title">Panda CMS</h2>
              <a class="link" href="javascript:void(0)">
                Soon...
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

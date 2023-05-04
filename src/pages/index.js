import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();


  return (
    <div className="content-hero">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <div className="content-homeCard">
              <a className="homeCard fancy-hover" href="/docs/intro">
                <div>
                  <img className="homeCard-img" src="/img/core.webp" alt="Home card"/>
                </div>
                <h2 className="homeCard-title">Panda Intro - 5m ⏱️</h2>
                <p>Lets begin your environment</p>
              </a>
              <a className="homeCard fancy-hover" href="/docs/category/--ui-kit---components">
                <div>
                  <img className="homeCard-img" src="/img/uikit.webp" alt="Home card"/>
                </div>
                <h2 className="homeCard-title">Panda UI Kit - 15m ⏱️</h2>
                <p>Improve your designs with awesome components.</p>
              </a>
              <a className="homeCard fancy-hover" href="/docs/category/-tutorial---plus">
                <div>
                  <img className="homeCard-img" src="/img/plus.webp" alt="Panda plus"/>
                </div>
                <h2 className="homeCard-title">Panda Plus - 10m ⏱️</h2>
                <p>Build your SaaS with all core features</p>
              </a>
              <a className="homeCard fancy-hover" href="/docs/category/-tutorial---firebase">
                <div>
                  <img
                    className="homeCard-img"
                    style={{ width: "72px" }}
                    src="/img/firebase.png"
                    alt="Firebase"
                  />
                </div>
                <h2 className="homeCard-title">Panda Firebase - 20m ⏱️</h2>
                <p>Build your SaaS with Next.js and Firebase</p>
              </a>
              <a className="homeCard fancy-hover" href="/docs/category/-tutorial---stripe"> 
                <div>
                  <img className="homeCard-img" src="/img/stripe.png" alt="Stripe"/>
                </div>
                <h2 className="homeCard-title">Panda Stripe - 30m ⏱️</h2>
                <p>Build your SaaS with Firebase and Stripe</p>
              </a>
              <a className="homeCard fancy-hover" href="/docs/category/-tutorial---lemonsqueezy">
                <div>
                  <img  src="/img/lemonsqueezy-logo.png" alt="Lemon squeezy"/>
                </div>
                Soon...
              </a>
              <a className="homeCard fancy-hover">
                <div>
                  <img className="homeCard-img" src="/img/cms.png" alt="CMS"/>
                </div>
                <h2 className="homeCard-title">Panda CMS</h2>
                  Soon...
              </a>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="container-footer">
          <div>
            <div>
              <div>
                {" "}
                <a href="https://blue-panda.dev/" title="Blue panda website" target="_blank">
                  <img src="/img/logo.webp" alt="Blue panda logo" style={{ width: "30px" }}/>{" "}
                </a>
              </div>
              <div>
                {" "}
                <a href="https://twitter.com/bluepanda_dev" title="Blue panda twitter" target="_blank">
                  <img src="/img/twitter.svg" alt="Twitter" style={{ width: "30px" }} />{" "}
                </a>
              </div>
              <div>
                {" "}
                <a href="https://discord.com/invite/XX3tpJxptC" title="Blue panda discord" target="_blank">
                  <img src="/img/discord.svg" alt="discord" style={{ width: "30px" }} />{" "}
                </a>
              </div>
            </div>
            <div>
              <div>
                <a href="javascript:void(0)" title="Patnership">Partnership</a>{" "}
              </div>
              <div>
                <a href="javascript:void(0)" title="License">Licence</a>
              </div>
              <div>
                <a href="javascript:void(0)" title="Contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <meta property="og:title" content="Blue Panda | Use, develop, ship"/>
        <meta property="og:image" content="https://plus.blue-panda.dev/_next/image?url=%2Ffeatures%2Frainbow.webp&w=256&q=75"/>
        <meta property="og:description" content="Put yourself weeks ahead with our Panda templates, save months of work."/>
      </Head>
      <HomepageHeader />
    </Layout>
  );
}

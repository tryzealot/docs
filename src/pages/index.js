import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate
            id="homepage.header.title"
            description="The title for homepage">
            Zealot
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate
            id="homepage.header.subtitle"
            description="The subtitle for homepage">
            Continuous everything. Automate the lifecycle of your apps. Connect your CI to build in the cloud, test on thousands of real devices, distribute to beta testers and app stores. All in one place.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/user-guide/">
            <Translate>Getting started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={
        translate({
          message: "Self-hosted Beta App Distribution for Android, iOS and macOS apps.",
          description: 'The homepage title message',
        })
      }
      description={
        translate({
          message: "Self-hosted Beta App Distribution for Android, iOS and macOS apps.",
          description: 'The homepage title message',
        })
      }>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

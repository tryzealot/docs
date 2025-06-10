import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

export default function HomepageHeader() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const imgPath = currentLocale === 'en' ? '/img' : `/img/${currentLocale}`;

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <Translate
                id="homepage.header.title"
                description="The main title for homepage">
                Self-hosted Beta App Distribution
              </Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate
                id="homepage.header.subtitle"
                description="The subtitle description for homepage">
                Deploy and distribute your Android, iOS, macOS, Windows and Linux apps with ease.
                Open source, self-hosted solution for managing beta releases and app lifecycle.
              </Translate>
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.primaryButton)}
                to="/docs/user-guide/">
                <Translate
                  id="homepage.button.getStarted"
                  description="Get started button text">
                  Get Started
                </Translate>
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.secondaryButton)}
                href="https://github.com/tryzealot/zealot">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{marginRight: '8px'}}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <Translate
                  id="homepage.button.viewOnGitHub"
                  description="View on GitHub button text">
                  View on GitHub
                </Translate>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.showcaseContainer}>
              <div className={styles.showcaseImage}>
                <ThemedImage
                  alt={translate({
                    id: 'homepage.showcase.dashboardAlt',
                    message: 'Zealot Dashboard Preview',
                    description: 'Alt text for dashboard preview image'
                  })}
                  sources={{
                    light: `${imgPath}/showcase-light.png`,
                    dark: `${imgPath}/showcase-dark.png`,
                  }}
                  className={styles.dashboardPreview}
                />
              </div>
              <div className={styles.showcaseStats}>
                <div className={styles.showcaseStat}>
                  <span className={styles.showcaseNumber}>5+</span>
                  <span className={styles.showcaseLabel}>
                    <Translate
                      id="homepage.showcase.platforms"
                      description="Supported platforms count">
                      Platforms
                    </Translate>
                  </span>
                </div>
                <div className={styles.showcaseStat}>
                  <span className={styles.showcaseNumber}>∞</span>
                  <span className={styles.showcaseLabel}>
                    <Translate
                      id="homepage.showcase.apps"
                      description="Unlimited apps">
                      Apps
                    </Translate>
                  </span>
                </div>
                <div className={styles.showcaseStat}>
                  <span className={styles.showcaseNumber}>100%</span>
                  <span className={styles.showcaseLabel}>
                    <Translate
                      id="homepage.showcase.openSource"
                      description="Open source">
                      Open Source
                    </Translate>
                  </span>
                </div>
              </div>
              <div className={styles.platformBadges}>
                <div className={styles.platformBadge}>
                  <span className={styles.platformIcon}>🤖</span>
                  <span className={styles.platformName}>Android</span>
                </div>
                <div className={styles.platformBadge}>
                  <span className={styles.platformIcon}>🍎</span>
                  <span className={styles.platformName}>iOS</span>
                </div>
                <div className={styles.platformBadge}>
                  <span className={styles.platformIcon}>💻</span>
                  <span className={styles.platformName}>macOS</span>
                </div>
                <div className={styles.platformBadge}>
                  <span className={styles.platformIcon}>🪟</span>
                  <span className={styles.platformName}>Windows</span>
                </div>
                <div className={styles.platformBadge}>
                  <span className={styles.platformIcon}>🐧</span>
                  <span className={styles.platformName}>Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

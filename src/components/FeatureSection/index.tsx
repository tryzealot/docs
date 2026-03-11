import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function FeatureSection(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>
              <Translate
                id="homepage.feature.deployment.title"
                description="Easy Deployment feature title">
                Easy Deployment
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.deployment.description"
                description="Easy Deployment feature description">
                Deploy with Docker in minutes. Self-hosted solution with complete control over your data.
              </Translate>
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>📱</div>
            <h3>
              <Translate
                id="homepage.feature.multiPlatform.title"
                description="Multi-Platform feature title">
                Multi-Platform
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.multiPlatform.description"
                description="Multi-Platform feature description">
                Support for Android, iOS, macOS, Windows, and Linux apps. One solution for all platforms.
              </Translate>
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔄</div>
            <h3>
              <Translate
                id="homepage.feature.cicd.title"
                description="CI/CD Integration feature title">
                CI/CD Integration
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.cicd.description"
                description="CI/CD Integration feature description">
                Seamlessly integrate with your existing CI/CD pipeline for automated app distribution.
              </Translate>
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>👥</div>
            <h3>
              <Translate
                id="homepage.feature.teamManagement.title"
                description="Team Management feature title">
                Team Management
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.teamManagement.description"
                description="Team Management feature description">
                Manage team members and control access permissions. Organize apps by channels and manage user roles effectively.
              </Translate>
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>
              <Translate
                id="homepage.feature.developerFriendly.title"
                description="Developer Friendly feature title">
                Developer Friendly
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.developerFriendly.description"
                description="Developer Friendly feature description">
                Rich SDKs and RESTful APIs for seamless integration. Support for multiple programming languages and platforms.
              </Translate>
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>
              <Translate
                id="homepage.feature.security.title"
                description="Secure & Private feature title">
                Secure & Private
              </Translate>
            </h3>
            <p>
              <Translate
                id="homepage.feature.security.description"
                description="Secure & Private feature description">
                Keep your apps and data secure with enterprise-grade security and privacy controls.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

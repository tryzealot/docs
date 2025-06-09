import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FEATURES_CONFIG = [
  {
    icon: '🚀',
    titleId: 'homepage.feature.deployment.title',
    titleDefault: 'Easy Deployment',
    descriptionId: 'homepage.feature.deployment.description',
    descriptionDefault: 'Deploy with Docker in minutes. Self-hosted solution with complete control over your data.',
  },
  {
    icon: '📱',
    titleId: 'homepage.feature.multiPlatform.title',
    titleDefault: 'Multi-Platform',
    descriptionId: 'homepage.feature.multiPlatform.description',
    descriptionDefault: 'Support for Android, iOS, macOS, Windows, and Linux apps. One solution for all platforms.',
  },
  {
    icon: '🔄',
    titleId: 'homepage.feature.cicd.title',
    titleDefault: 'CI/CD Integration',
    descriptionId: 'homepage.feature.cicd.description',
    descriptionDefault: 'Seamlessly integrate with your existing CI/CD pipeline for automated app distribution.',
  },
  {
    icon: '👥',
    titleId: 'homepage.feature.teamManagement.title',
    titleDefault: 'Team Management',
    descriptionId: 'homepage.feature.teamManagement.description',
    descriptionDefault: 'Manage team members and control access permissions. Organize apps by channels and manage user roles effectively.',
  },
  {
    icon: '⚡',
    titleId: 'homepage.feature.developerFriendly.title',
    titleDefault: 'Developer Friendly',
    descriptionId: 'homepage.feature.developerFriendly.description',
    descriptionDefault: 'Rich SDKs and RESTful APIs for seamless integration. Support for multiple programming languages and platforms.',
  },
  {
    icon: '🔒',
    titleId: 'homepage.feature.security.title',
    titleDefault: 'Secure & Private',
    descriptionId: 'homepage.feature.security.description',
    descriptionDefault: 'Keep your apps and data secure with enterprise-grade security and privacy controls.',
  },
];

function Feature({ icon, titleId, titleDefault, descriptionId, descriptionDefault }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>
        <Translate
          id={titleId}
          description={`${titleDefault} feature title`}>
          {titleDefault}
        </Translate>
      </h3>
      <p>
        <Translate
          id={descriptionId}
          description={`${titleDefault} feature description`}>
          {descriptionDefault}
        </Translate>
      </p>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {FEATURES_CONFIG.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              titleId={feature.titleId}
              titleDefault={feature.titleDefault}
              descriptionId={feature.descriptionId}
              descriptionDefault={feature.descriptionDefault}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

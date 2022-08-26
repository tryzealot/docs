import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_mountain.svg').default,
    description: (
      <Translate>
        Zealot was designed from the ground up to be easily installed and running quickly.
      </Translate>
    ),
  },
  {
    title: <Translate>Focus on What Matters</Translate>,
    Svg: require('@site/static/img/undraw_tree.svg').default,
    description: (
      <Translate>
        Zealot lets you focus on your app, and we&apos;ll do the chores. Go ahead and upload your apps.
      </Translate>
    ),
  },
  {
    title: <Translate>Open Source 100%</Translate>,
    Svg: require('@site/static/img/undraw_monitors.svg').default,
    description: (
      <Translate>
        Zealot is an open source project, Everyone could easy self hosted on own servers.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

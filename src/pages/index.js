import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import HomepageHeader from '@site/src/components/HomepageHeader';
import FeatureSection from '@site/src/components/FeatureSection';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.seo.title',
        message: "Self-hosted Beta App Distribution for Android, iOS, macOS, Windows and Linux apps.",
        description: 'The homepage SEO title',
      })}
      description={translate({
        id: 'homepage.seo.description',
        message: "Self-hosted Beta App Distribution for Android, iOS, macOS, Windows and Linux apps.",
        description: 'The homepage SEO description',
      })}>
      <HomepageHeader />
      <main>
        <FeatureSection />
      </main>
    </Layout>
  );
}

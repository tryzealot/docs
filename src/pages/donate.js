

import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

export default function Donate() {
  return (
    <Layout title={translate({
        id: 'donate.title',
        message: "Support Zealot",
      })}>
      <main style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1><Translate id="donate.title">Support Zealot</Translate></h1>
        <p>
          <Translate id="donate.description">
            Zealot is an open-source project dedicated to providing a simple and easy-to-use internal distribution platform for mobile app developers. If Zealot has helped your work, you are welcome to support the ongoing maintenance and development of the project through the following ways.
          </Translate>
        </p>

        <h2><Translate id="donate.channels">Donation Channels</Translate></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          <a
            href="https://github.com/sponsors/icyleaf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#7b6ff0',
              color: '#fff',
              fontWeight: 600,
              fontSize: 18,
              borderRadius: 8,
              padding: '16px 0',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(123,111,240,0.08)'
            }}
          >
            <img src={useBaseUrl('/img/donate/github.svg')} style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            <Translate id="donate.githubSponsor">GitHub Sponsor</Translate>
          </a>
          <a
            href="https://buymeacoffee.com/icyleaf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#F8D802',
              color: '#000',
              fontWeight: 600,
              fontSize: 18,
              borderRadius: 8,
              padding: '16px 0',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(123,111,240,0.08)'
            }}
          >
            <img src={useBaseUrl('/img/donate/buy-me-a-coffee.svg')} style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            <Translate id="donate.buyMeACoffee">Buy Me a Coffee</Translate>
          </a>
          <a
            href="https://afdian.net/@icyleaf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#ff4eb5',
              color: '#fff',
              fontWeight: 600,
              fontSize: 18,
              borderRadius: 8,
              padding: '16px 0',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(255,78,181,0.08)'
            }}
          >
            <img src={useBaseUrl('/img/donate/afdian.svg')} style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            <Translate id="donate.afdian">爱发电</Translate>
          </a>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h3><Translate id="donate.wechatAlipay">WeChat / Alipay</Translate></h3>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <div>
              <img src={require('/static/img/donate/wechat.png').default} alt="WeChat Donate QR" style={{ width: 240, borderRadius: 8 }} />
              <div style={{ textAlign: 'center' }}><Translate id="donate.wechat">WeChat</Translate></div>
            </div>
            <div>
              <img src={require('/static/img/donate/alipay.png').default} alt="Alipay Donate QR" style={{ width: 240, borderRadius: 8 }} />
              <div style={{ textAlign: 'center' }}><Translate id="donate.alipay">Alipay</Translate></div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: 32, color: '#888', fontSize: 14 }}>
          <Translate id="donate.thankYou">Thank you for choosing Zealot as your app distribution solution.</Translate>
        </p>
      </main>
    </Layout>
  );
}

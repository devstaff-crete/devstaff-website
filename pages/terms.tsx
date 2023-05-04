import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import globalStyles from '../styles/globals.module.scss';

export default function Terms() {
  return (
    <Layout>
      <PageMeta title="Terms & Conditions - DevStaff" />
      <HeroSection imageSrc="/hero-contact.jpg" title="Terms & Conditions" />

      <section className="pb-5">
        <div className="container">
          <div className="row pb-2">
            <div className="col-12">
              <h3 className={globalStyles.sectionTitle}>Terms and Conditions</h3>
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-12 d-flex align-items-center flex-column">
              <div>
                <div>
                  <p className="pb-2">
                    Welcome to DevStaff website (the website)! By accessing and using our website, you agree
                    to these terms of use. If you do not agree to these terms, please do not use our website.{' '}
                  </p>
                  <p className="pb-2">
                    <b>No Warranties:</b> This website is provided on an &quot;as is&quot; basis without any
                    warranties, express or implied. DevStaff does not guarantee the accuracy, reliability,
                    completeness, or timeliness of the content on this website.
                  </p>
                  <p className="pb-2">
                    <b>Links:</b> Our website may contain links to third-party websites or services that are
                    not owned or controlled by us. We have no control over, and assume no responsibility for,
                    the content, privacy policies, or practices of any third-party websites or services. You
                    acknowledge and agree that we shall not be responsible or liable, directly or indirectly,
                    for any damage or loss caused or alleged to be caused by or in connection with the use of
                    or reliance on any such content, goods, or services available on or through any such
                    websites or services.
                  </p>
                  <p className="pb-2">
                    <b>Limitation of Liability:</b> In no event shall we be liable for any direct, indirect,
                    incidental, special, or consequential damages arising out of or in connection with the use
                    or inability to use this website, even if we have been advised of the possibility of such
                    damages.{' '}
                  </p>
                  <p className="pb-4">
                    By accessing and using our website, you agree to these terms of use. We reserve the right
                    to modify these terms of use at any time without prior notice. Please review these terms
                    of use periodically for any changes. Your continued use of our website following the
                    posting of changes to these terms of use constitutes your acceptance of those changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

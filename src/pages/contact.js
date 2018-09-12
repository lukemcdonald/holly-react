import React from 'react';
import Layout from '../layouts/index';

const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Contact</h1>
                </header>

                <div className="entry-body">
                  <p>Add your contact information here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;

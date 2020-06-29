import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Door Supervisor</h2>
          {/* <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p> */}
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          {/* <h3 className="major">Lorem ipsum dolor</h3> */}
          <p>
          At 4T Knox Secure we have combined experience of many decades working in the night time economy around the world, which contributes to our resilient operational plan on every clients unique needs.
          </p>
          <p>
With our unique CRM we monitor performance closely on an ongoing basis ensuring quality assurance, adapting to security needs, evolving with the needs of the client.
</p>
The night time economy is growing and diversifying, Door Supervisors are at the front line of this, as an organisation we have evolved to creating a new age Door Supervisor.
<p>
Through  our unique customer services training, our staff add a positive and approachable culture at your venue.
</p>
We invest heavily in training (through our people strategy) our staff, exceeding the customer expectation on service, linking in with our strong operational team.
<p>
All security operatives are vetted to a BS 7858 standard.
          </p>

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id
            quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
            consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
            felis elementum varius.
          </p>

          <h3 className="major">Vitae phasellus</h3>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>

          {/* <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

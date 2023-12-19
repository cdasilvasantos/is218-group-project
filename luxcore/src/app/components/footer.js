// components/Footer.js
import React from 'react';

export default function Footer() {
  // Note: External script functionality needs to be handled/reimplemented

  return (
    <footer>
      <section id="contact-us">


        <h1>Luxcore</h1>
        <h3>123 Warren Street, Newark, NJ | 123-456-7890</h3>
        

        <div id="mc_embed_signup">
          <form
            action="https://njit.us14.list-manage.com/subscribe/post?u=2357bfed3c1d60b4f25ca0e87&amp;id=81eee0a60a&amp;f_id=00b277e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Join C&M Members Club</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> Required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name</label>
                <input type="text" name="FNAME" className="text" id="mce-FNAME" />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name</label>
                <input type="text" name="LNAME" className="text" id="mce-LNAME" />
              </div>
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
              </div>
            </div>
          </form>
        </div>

        <hr />
        <p>&copy; 2023 LuxCore. All Rights Reserved.</p>
      </section>
    </footer>
  );
}

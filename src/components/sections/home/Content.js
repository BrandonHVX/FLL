import React, { Fragment } from 'react';
import Client from '../../layouts/Client';
import About from '../hometwo/About';
import Banner from './Banner';
import Blog from './Blog';
import Contact from '../homethree/Contact';
import Features from './Features';
import Service from './Service';
import Skills from './Skills';
import Statics from '../homethree/Statics';
import Team from './Team';
import Testimonials from './Testimonials';
import Video from './Video';
import Whyus from './Whyus';
import Workingprocess from '../hometwo/Workingprocess';
import Faq from './Faqs';
import AdvanceTab from './Advancedtab';

export default () => {
  return (
    <Fragment>
      <Banner />
      <Workingprocess />
      {/* <AdvanceTab /> */}
      <Service />
      {/* <Video /> */}
      {/* <Features /> */}
      <Statics />
      <Whyus />
      {/* <Counter /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Faq />
      <section className="client-section">
        <div className="container">
          <div className="client-slider section-gap line-bottom">
            <Client />
          </div>
        </div>
      </section>
      <Contact />
      {/* <Blog /> */}
    </Fragment>
  );
};

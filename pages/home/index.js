import React from 'react';

import './index.scss';

import Head from './components/head';
import Foot from './components/foot';

import SlideWrap from './wraps/slide';
import SkillsWrap from './wraps/skills';
import PeriodsWrap from './wraps/periods';
import ThemeWrap from './wraps/theme';

export default class PageHome extends React.Component {
  render() {
    return (
      <div className="page page_home">
        <Head />
        <div className="wraps">
          <SlideWrap />
          <SkillsWrap />
          <PeriodsWrap />
          <ThemeWrap />
        </div>
        <Foot />
      </div>
    );
  }
}

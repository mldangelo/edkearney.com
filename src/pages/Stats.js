import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Table from '../components/Stats/Table';
import data from '../data/stats';

const Stats = () => (
  <Main
    title="Stats and Facts"
    description="Some statistics about Ed Kearney and edkearney.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats & Facts</Link></h2>
        </div>
      </header>
      <h3>Some stats and facts about me</h3>
      <Table data={data} />
    </article>
  </Main>
);

export default Stats;

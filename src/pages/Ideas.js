import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/ideas.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Ideas = () => (
  <Main
    title="About"
    description="Good Ideas from Ed Kearney"
  >
    <article className="post markdown" id="ideas">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/ideas">Ideas</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Ideas;

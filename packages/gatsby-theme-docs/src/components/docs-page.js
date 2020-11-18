import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';

const DocsPage = ({ page }) => (
  <Layout>
    <h1>{page.title}</h1>
    <MDXRenderer>{page.body}</MDXRenderer>
    <p>Page updated at {page.updated}</p>
  </Layout>
);
export default DocsPage;

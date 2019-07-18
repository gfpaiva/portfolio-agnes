import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import '../scss/index.scss';
import FirstPresentation from '../components/FirstPresentation/FirstPresentation';
import Project from '../components/Project/Project';

export const HomeTemplate = ( { home } ) => {
	const { email, linkedin, text, textSupport } = home.headerPresentation;
	const { projectList } = home;

	return (
		<div className='main'>
			<FirstPresentation
				email={email}
				linkedin={linkedin}
				secondColumnText={text}
				secondColumnSupportText={textSupport}
			/>

			{projectList.map((project, idx) => (
				<Project key={idx} project={project} />
			))}
		</div>
	);
};

const IndexPage = ( { data } ) => {
	const { frontmatter: home } = data.homePageData.edges[0].node;
	const { seoTitle, seoDescription, browserTitle } = home.seo;

	return (
		<Fragment>
			<Helmet>
				<meta name="title" content={seoTitle} />
				<meta name="description" content={seoDescription} />
				<title>{`Agnes Pinhanelli | ${browserTitle}`}</title>
			</Helmet>
			<HomeTemplate home={home} />
		</Fragment>
	);
}

export default IndexPage;


export const pageQuery = graphql`
	query HomePageQuery {
		homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
			edges {
				node {
					frontmatter {
						headerPresentation {
							email
							linkedin
							text
							textSupport
						}
						projectList {
							projectName
							projectLocation
							text
							projectFirstLink {
								linkHref
								linkTitle
							}
							projectSecondLink {
								linkHref
								linkTitle
							}
							projectGallery {
								image
								imageAlt
							}
						}
						seo {
							browserTitle
							description
							title
						}
					}
				}
			}
		}
	}
`;
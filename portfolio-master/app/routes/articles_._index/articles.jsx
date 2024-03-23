import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useWindowSize } from '~/hooks';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { cssProps } from '~/utils/style';
import styles from './articles.module.css';

function ArticlesPost({ index }) {
  return (
    <article
      className={styles.post}
      data-featured={false}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postDetails}>
        <div aria-hidden className={styles.postDate}>
          <Divider notchWidth="64px" notchHeight="8px" />
        </div>
        <Heading as="h2" level={2} className={styles.comingSoon}>
          Coming Soon
        </Heading>
        <Text size="l" as="p" className={styles.comingSoonText}>
          Stay tuned for our upcoming articles!
        </Text>
      </div>
    </article>
  );
}

export function Articles() {
  const { posts } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postList = (
    <div className={styles.list}>
      {Array(posts.length).fill().map((_, index) => (
        <ArticlesPost key={index} index={index} />
      ))}
    </div>
  );

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <div className={styles.grid}>
          {postList}
        </div>
      </Section>
      <Footer />
    </article>
  );
}

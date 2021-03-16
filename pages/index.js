import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}

export default function Home( { countries } ) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
  {countries.map((country) => (
    <div key={country.code} className={styles.card}>
      <h3>{country.name}</h3>
      <p>
        {country.code} - {country.emoji}
      </p>
    </div>
  ))}
</div>
    </div>
  )
}

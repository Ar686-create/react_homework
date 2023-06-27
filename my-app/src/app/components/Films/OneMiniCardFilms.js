import React from 'react';
import styles from './films.module.css';
import Image from 'next/image';
import CounterBilet from '../UI/CounterBilet';
import Link from 'next/link';

export default function OneMiniCardFilm({ id, title, posterUrl, genre }) {
  return (
    <div className={styles.onefilm}>
      <img
        src={posterUrl}
        className={styles.basketImg}
        width={100}
        height={120}
      />
      <div className={styles.filmsBox}>
        <div className={styles.filmsInfo}>
          <Link href={`/movie/${id}`}>
          <div className={styles.filmsTitle}>{title}</div>
          </Link>
          <div className={styles.filmsYear}>{genre}</div>
        </div>
        <CounterBilet id={id}/>
      </div>
    </div>
  );
}

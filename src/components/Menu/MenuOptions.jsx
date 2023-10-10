import React from 'react'
import styles from './MenuOptions.module.css'

const MenuOptions = () => {
  return (
    <section className={styles.bg}>
        <div className={styles.grid + ' container'}>
            <div className={styles.estudo}>
                <h1>Comece agora</h1>
            </div>
            <div className={styles.emBreve}>
                <h1>Em breve</h1>
            </div>
            <div className={styles.emBreve2}>
            <h1>Em breve</h1>
            </div>
            <div className={styles.emBreve3}>
            <h1>Em breve</h1>
            </div>
        </div>
    </section>
  )
}

export default MenuOptions
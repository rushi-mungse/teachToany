import React from 'react'
import styles from './Animation.module.css'
const Animation = ({text}) => {
    return (
        <div className={styles.animation_wrap}>
            <div className={styles.animated_img}>
            <img src="/images/logo.png" alt="logo" />

            </div>
            <span>{text}</span>
        </div>
    )
}

export default Animation

import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export const Profile = () => {

    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/odairdev.png" alt="Imagem do Perfil"/>
            <div>
                <strong>Junior Custodio</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
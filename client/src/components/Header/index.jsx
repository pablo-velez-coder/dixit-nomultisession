import styles from './styles.module.scss'

export const DashboardHeader = ({users,currentMainPlayer,gameIndex, game}) => {
    return (
        <div className={styles.header}>
            <div>
            <h2>Dixit</h2>
            </div>
            <div>
            <strong>
                Jugadores: {users.map(x=>x.name).join(', ')}
            </strong>
          <strong>
                Jugador principal: {currentMainPlayer.name}
            </strong>
            </div>
        </div>
    )
}

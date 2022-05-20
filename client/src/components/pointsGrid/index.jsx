import styles from './styles.module.scss'

export const PointsGrid = ({points, user, users}) => {
    const pointsGrid = [...Array(20).keys()]

    return (
        <div>
            {users.map(x=>(
                <span>
                    {x.name}({x.points}pts),
                </span>
            ))}
        <div className={styles.pointsGrid}>

{    pointsGrid.map(x=>(
        <div key={x}
         className={`${styles.pointsGridPoint} ${x===user.points && styles.actualRating}`}
         >
            {x}
        </div>
    ))}
        </div>
        </div>
    )
}

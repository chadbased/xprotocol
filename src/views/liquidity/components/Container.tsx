import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    cardView: {
        width: '500px',
        display: 'flex',
        flexGrow: 1,
        color: '#fff',
        margin: '20px',
        borderRadius: '18px',
        background: 'rgba(102, 102, 102, 0.2)',
        backdropFilter: 'blur(5px)',
        boxShadow: 'rgba(0, 0, 0, 0.5) 20px 20px 0px',
        '& .MuiTypography-root': {
            color: '#fff'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
}))

function Container({ children }: any) {

    const classes = useStyles()

    return (
        <div className={classes.cardView}>
            {
                children
            }
        </div>
    )
}

export default Container
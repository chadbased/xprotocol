import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { useTranslation } from '@/context/Localization'

const useStyles = makeStyles(() => ({
    docsView: {
        width: '100vw',
        height: '50vh',
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

function Docs() {

    const classes = useStyles()
    const { t } = useTranslation()

    return (
        <div className={classes.docsView}>
            <Box>
                <Typography sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#fff'
                }}>
                    {t('Coming Soon!')}
                </Typography>
            </Box>
        </div>
    )
}

export default Docs
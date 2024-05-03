import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from '@/context/Localization'
import { IconExternalLink } from '@tabler/icons'

const useStyles = makeStyles(theme => ({
    menuList: {
        '& .MuiTypography-root': {
            color: '#fff',
            fontSize: '20px',
            fontFamily: 'Square',
            fontWeight: 500,
            lineHeight: '55px'
        },
        '& .title': {
            fontSize: '28px',
            marginLeft: 20
        }
    }
}))



function MenuList({ toggle }) {
    const classes = useStyles()
    const { t } = useTranslation()

    return (
        <div className={classes.menuList}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                '& .MuiTypography-root': {
                    px: 2
                },
                '& .active': {
                    width: '80%',
                    borderRadius: '20px',
                    backgroundColor: '#eee',
                    '& .MuiTypography-root': {
                        textAlign: 'center',
                        color: '#1e1e1e'
                    }
                },

            }}
                onClick={toggle}
            >

                <NavLink to='/swap'>
                    <Typography>{t('Swap')}</Typography>
                </NavLink>
                <NavLink to='/liquidity'>
                    <Typography>{t('Liquidity')}</Typography>
                </NavLink>

                <Link to='/farm'>
                    <Typography>{t('Stake')}</Typography>
                </Link>

            </Box>
        </div >
    )
}

export default MenuList

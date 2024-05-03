import React from 'react'
import { Typography, useMediaQuery, Avatar, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { IconMenu2, IconExternalLink } from '@tabler/icons'
import ConnectButton from './ConnectWallet'
import SelectNetwork from './SelectNetwork'

import LanguageSelector from './LanguageSelector'
import { useTranslation } from '@/context/Localization'
import { Link } from 'react-router-dom'
import NoobyLogo from '../../asset/images/LogoHorizontal.png'


interface IHeader {
    handleDrawerToggle?: () => void
}

const useStyles = makeStyles(theme => ({

    topBar: {
        backgroundColor: '#1E1E1E',
        width: '100%',
        position:'fixed',
        zIndex: '99',
        '& .MuiTypography-root': {
            whiteSpace: 'nowrap',
            color: '#fff',
            fontSize: '16px',
        }
    },
    topBarShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: 1000
        }),
        marginLeft: 0
    },
    toggleButton: {
        marginLeft: '15px'
    }
}))

function Header({ handleDrawerToggle }: IHeader) {
    const is960 = useMediaQuery('(max-width:991px)')
    const isXs = useMediaQuery('(max-width:787px)')
    const classes = useStyles()

    const { t } = useTranslation()

    return (
        <div className={classes.topBar}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'end', md: 'space-between' },
                    alignContent: 'center',
                    p: 2
                }}
            >
                {!is960 &&
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        '& .MuiTypography-root': {
                            px: 2
                        }
                    }}>
                        <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 'auto',
                        '& img': {
                            width: '150px',
                            height: 'auto',
                        }
                    }}>
                        <img src={NoobyLogo} alt='xprotocol' />
                    </Box>

                        <Link to='/swap'>
                            <Typography>{t('Swap')}</Typography>
                        </Link>
                        <Link to='/liquidity'>
                            <Typography>{t('Liquidity')}</Typography>
                        </Link>
                        <Link to='farm'>
                            <Typography>{t('Stake')}</Typography>
                        </Link>


                    </Box>
                }
                <Box display='flex' alignItems='center'>
                    
                    {/* <SelectNetwork /> */}
                    <ConnectButton />
                    {
                        is960 && (
                            <div onClick={handleDrawerToggle} className={classes.toggleButton}>
                                <Avatar
                                    sx={{
                                        bgcolor: '#1e1e1e',
                                        boxShadow: '0px 1px 4px #ccc',
                                        mt: '3px'
                                    }}
                                >
                                    <IconMenu2 color='#FFF' />
                                </Avatar>
                            </div>
                        )
                    }
                </Box>
            </Box>
        </div >
    )
}

export default Header

import React from 'react'
// import { makeStyles } from '@mui/styles';
import { Button, Box, useMediaQuery } from '@mui/material'
import { formart } from '../../utils/formatAddress'

import { useAccount } from 'wagmi'
import useAuth from '@/hooks/useAuth'
import { useTranslation } from '@/context/Localization'
import { ConnectButton as RainbowButton } from '@rainbow-me/rainbowkit'

function ConnectButton() {
    const isXs = useMediaQuery('(max-width:400px)')

    const { isConnected, address } = useAccount()
    const { t } = useTranslation()

    return (
        <div>
            <RainbowButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted
                }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading'
                    const connected =
                        ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated')

                    return (
                        <Box
                            sx={{
                                mx: 2,
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Button
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '16px',
                                    textTransform: 'none',
                                    color: '#000',
                                    padding: '10px',
                                    fontSize: '16px',
                                    '&:hover': {
                                        bgcolor: '#666',
                                        color: '#fff'
                                    }
                                }}
                                onClick={(evt) => {
                                    if (!connected) openConnectModal()
                                    else if (chain?.unsupported) openChainModal()
                                    else openAccountModal()
                                }}
                            >
                                {(() => {
                                    if (connected) return formart(address as string)
                                    else if (chain?.unsupported) return t('Switch Network')
                                    else return isXs ? t('Connect') : t('Connect Wallet')
                                })()}
                            </Button>
                        </Box>
                    )
                }}
            </RainbowButton.Custom>
        </div>
    )
}

export default ConnectButton

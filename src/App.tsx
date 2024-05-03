import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ViewBase from './components/viewbase'
import { WagmiProvider } from './utils/wagmi'
import { Provider } from 'react-redux'
import store from './state'
import { SWRConfig } from 'swr'
import { LanguageProvider } from './context/Localization'
import { fetchStatusMiddleware } from './hooks/useSWRContract'
import { Updaters } from './Updater'
import { usePollBlockNumber } from './state/block/hooks'

import Farm from '@/views/farm'
import Liquidity from './views/liquidity'
import Swap from './views/swap'
import useEagerConnect from './hooks/useEagerConnect'
import { ToastListener, ToastsProvider } from './context/ToastsContext'
import { DataProvider } from './context/DataContext'
import { Buffer } from 'buffer'
import '@rainbow-me/rainbowkit/styles.css'

// eslint-disable-next-line @typescript-eslint/no-var-requires

function GlobalHooks() {
    usePollBlockNumber()
    useEagerConnect()
    return null
}

export default function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Nova Square'
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            }
        }
    })

    return (
        <HashRouter>
            <WagmiProvider>
                <Provider store={store}>
                    <LanguageProvider>
                        <SWRConfig
                            value={{
                                use: [fetchStatusMiddleware]
                            }}
                        >
                            <DataProvider>
                                <ToastsProvider>
                                    <GlobalHooks />
                                    <Updaters />
                                    <ThemeProvider theme={theme}>
                                        <ViewBase>
                                            <Routes>
                                                <Route path="/" element={<Swap />} />
                                                <Route path="/swap" element={<Swap />} />
                                                <Route path="/farm" element={<Farm />} />
                                                <Route path="/liquidity" element={<Liquidity />} />
                                                <Route path="/add" element={<Liquidity />} />
                                                <Route path="/remove" element={<Liquidity />} />
                                            </Routes>
                                        </ViewBase>
                                        <ToastListener />
                                    </ThemeProvider>
                                </ToastsProvider>
                            </DataProvider>
                        </SWRConfig>
                    </LanguageProvider>
                </Provider>
            </WagmiProvider>
        </HashRouter>
    )
}


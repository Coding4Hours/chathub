import { useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import Browser from 'webextension-polyfill'
import Button from './components/Button'
import './i18n'
import SidePanelPage from './pages/SidePanelPage'
import { trackEvent } from './plausible'
import './base.scss'
import './sidepanel.css'

function SidePanelApp() {
    return <SidePanelPage />
}

const container = document.getElementById('app')!
const root = createRoot(container)
root.render(<SidePanelApp />)

'use client'
import { HelmetProvider } from '@dr.pogodin/react-helmet';

export default function AdminLayout({ children }) {
  return (
    <HelmetProvider>
      <div className="admin-layout">
        {children}
      </div>
    </HelmetProvider>
  )
}

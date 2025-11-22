import { createContext, useContext, useState, ReactNode } from 'react'
import ContactModal from '../components/ContactModal'

interface ContactContextType {
    openContactModal: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function useContact() {
    const context = useContext(ContactContext)
    if (context === undefined) {
        throw new Error('useContact must be used within a ContactProvider')
    }
    return context
}

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <ContactContext.Provider value={{ openContactModal: () => setIsContactOpen(true) }}>
            {children}
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </ContactContext.Provider>
    )
}

export default ContactContext

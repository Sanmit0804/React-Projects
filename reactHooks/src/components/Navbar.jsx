import React, { useState } from 'react'
import {
    CCollapse,
    CContainer,
    CNavbar,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CNavItem,
    CNavLink,
} from '@coreui/react'

export const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <CNavbar expand="lg" className="bg-body-tertiary">
            <CContainer fluid>
                <CNavbarBrand href="#">Sanmit Suthar</CNavbarBrand>
                <CNavbarToggler onClick={() => setVisible(!visible)} />
                <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarNav className="me-auto">
                        <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Profile</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Education</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Projects</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Resume</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Contact me</CNavLink>
                        </CNavItem>
                    </CNavbarNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    )
}

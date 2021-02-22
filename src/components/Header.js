import React, { useState } from 'react'
import {Button, Card, CardBody, CardTitle, Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap'

export default function Header() {

    const [open, setOpen] = useState(false)
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       isNotifyOpen : false
    //     }
    //     this.toggleNotify = this.toggleNotify.bind(this)
    //   }
      
    // toggleNotify(){
    //     this.setState({
    //         isNotifyOpen : !this.state.isNotifyOpen
    //     })
    // }
    return (
        <>
        <Navbar>
            <NavbarBrand>ChatWithUs</NavbarBrand>
            <Nav>
                <NavItem><Button onClick={() => setOpen(!open)}>Notify</Button></NavItem>
            </Nav>
        </Navbar>
        {open ? <Card>
            <CardTitle>Notify</CardTitle>
            <CardBody>loreman;daer;uvadvj ;abub;aeerba;kjad</CardBody>
        </Card> : null}
        </>
        
    )

}
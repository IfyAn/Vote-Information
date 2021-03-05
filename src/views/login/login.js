import { Badge, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react';
import { CustomButton } from '../../components/button';
import { Helmet } from 'react-helmet';
import Logo from '../../components/logo/Logo'
import './login.css';

export default function Login() {
    const [nydpCode, setNydpCode] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({nydpCode, password})
    }

    return (
        <div>
            <Helmet>
                <title>One Nigeria || Login</title>
                <meta property="og:url" content='TODO: SITE URL HERE' />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="One Nigeria || Login" />
                <meta property="fb:app_id" content="1732816256851456" />
                <meta property="og:image" content="https://res.cloudinary.com/oluwatobby/image/upload/v1612528977/one_nigeria_logo_gbs9b6.png" />
                <meta property="og:description" content="Login to vote for your favourite NYPD candidate" />

                {/* TWITTER  */}
                <meta name="twitter:title" content="One Nigeria || Login" />
                <meta name="twitter:description" content="Login to vote for your favourite NYPD candidate" />
                <meta name="twitter:image" content="https://res.cloudinary.com/oluwatobby/image/upload/v1612528977/one_nigeria_logo_gbs9b6.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@OfficialOpenGov" />
            </Helmet>

            <Logo />
            <h1 className="page_title">Login</h1>
            <form className="login_form" onSubmit={handleSubmit}>
                <FormControl id="nypd-code" className="login_form_group" isRequired>
                    <FormControl className="login_form_label">Nydp Code</FormControl>
                    <Input type="text" onChange={(e) => setNydpCode(e.target.value)} placeholder="Nydp code" />
                    {!nydpCode ? <Badge colorScheme="red">Nydp code cannot be empty</Badge>
                        :
                        nydpCode.length < 4 ? <Badge colorScheme="red">Invalid Nydp code</Badge> : ''}
                </FormControl>
                <FormControl isRequired className="login_form_group">
                    <FormControl className="login_form_label">Password</FormControl>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    {!password
                        ? <Badge colorScheme="red">password cannot be empty</Badge>
                        :
                        password.length < 4 ? <Badge colorScheme="red">password character should more than 3</Badge> : ''}
                </FormControl>

                <CustomButton content="Login" />
            </form>
        </div>
    )
}

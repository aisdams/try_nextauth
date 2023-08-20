"use client"
import Button from '@/components/Button';
import TextBox from '@/components/TextBox';
import { signIn } from 'next-auth/react'
import React, { useRef, useState } from 'react'

const LoginPage = () => {
    const userName = useRef("");
    const pass = useRef("");
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async () => {
        if (userName.current.trim() !== "" && pass.current.trim() !== "") {
            const result = await signIn("credentials", {
                username: userName.current,
                password: pass.current,
                redirect: true,
                callbackUrl: "/"
            });
        } else {
            setShowAlert(true);
        }
    }

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            if (userName.current.trim() !== "" && pass.current.trim() !== "") {
                onSubmit();
            } else {
                setShowAlert(true);
            }
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600'>
            <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
                <TextBox labelText="UserName" onChange={(e) => (userName.current = e.target.value)} />
                <TextBox labelText="Password" type='password' onChange={(e) => (pass.current = e.target.value)} />

                {showAlert && <p className="text-red-600 text-center mb-2">Please fill in both fields.</p>}
                <Button onClick={onSubmit} onKeyDown={handleKeyPress}>Login</Button>
            </div>
        </div>
    )
}

export default LoginPage;

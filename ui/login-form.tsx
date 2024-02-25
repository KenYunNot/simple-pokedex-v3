"use client"

import Link from "next/link"
import { useState } from "react";
import { login } from "@/actions/login";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const onSubmit = async (values: FormData) => {
    setError(undefined);
    setSuccess(undefined);
    const response = await login(values);
    if (response?.error)
      setError(response.error);
  }

  return (
    <form action={onSubmit} className='flex flex-col items-center w-50 p-4 bg-gray-500 rounded-md'>
      {error && (
        <div className="mb-3 px-5 py-3 bg-red-400 text-center text-white font-bold rounded-md">
          {error}
        </div>
      )}
      <input type="text" name="email" placeholder="Email" className='w-full mb-3 p-1 pl-2 text-lg border rounded-md' />
      <div className="w-full relative mb-6">
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className='w-full p-1 pl-2 text-lg border rounded-md' />
        <EyeIcon className="absolute top-0 right-0 m-2 w-6 h-6 text-gray-500 hover:text-black" onClick={() => setShowPassword(!showPassword)} />
      </div>
      <button type="submit" className='w-full h-14 mb-3 text-2xl text-white font-semibold bg-blue-400 border-b-4 border-blue-500 rounded-md duration-200 hover:bg-blue-500 hover:border-blue-600'>
        Login
      </button>
      <p className="my-2 text-white font-semibold">
        New? <Link href="/register" className="text-blue-400 hover:underline">Click here to register!</Link>
      </p>
    </form>
  )
}
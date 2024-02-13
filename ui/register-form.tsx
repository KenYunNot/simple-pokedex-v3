"use client"

import Link from "next/link"
import { useState } from "react";
import { register } from '@/actions/register';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  async function onSubmit(values: FormData) {
    setError(undefined);
    setSuccess(undefined);
    const response = await register(values);
    if (response?.error) {
      setError(response.error);
    }
    if (response?.success) {
      setSuccess(response.success);
    }
  }

  return (
    <form action={onSubmit} className='flex flex-col w-96 items-center p-4 bg-gray-500 rounded-md'>
      {error && (
        <div className="mb-3 px-5 py-3 bg-red-400 text-center text-white font-bold rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-3 px-5 py-3 bg-green-400 text-center text-white font-bold rounded-md">
          {success}
        </div>
      )}
      <input type="text" name="email" placeholder="Email" className='w-full mb-3 p-1 pl-2 text-lg border rounded-md' />
      <input type="text" name="username" placeholder="Username" className='w-full mb-3 p-1 pl-2 text-lg border rounded-md' />
      <div className="relative w-full mb-6">
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className='w-full p-1 pl-2 text-lg border rounded-md' />
        <EyeIcon className="absolute top-0 right-0 m-2 w-6 h-6 text-gray-500 hover:text-black" onClick={() => setShowPassword(!showPassword)} />
      </div>
      <button type="submit" className='w-full h-14 mb-3 text-2xl text-white font-semibold bg-blue-400 border-b-4 border-blue-500 rounded-md duration-200 hover:bg-blue-500 hover:border-blue-600'>
        Sign Up
      </button>
      <p className="my-2 text-white font-semibold">
        Already a user? <Link href="/login" className="text-blue-400 hover:underline">Click here to log in!</Link>
      </p>
    </form>
  )
}
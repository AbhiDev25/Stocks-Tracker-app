"use client"

import { useForm } from "react-hook-form"
import { Button } from '@/components/ui/button';
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";

const SignIn = () => {
    const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },mode: 'onBlur'

  },);

  const onSubmit = async(data: SignInFormData) => {
    try{
      console.log(data);
    } catch(e){
      console.error(e);
    }
  }

  return (
    <>
    <h1 className="form-title">Sign In</h1>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
        name="email"
        label="Email"
        placeholder="Enter Your Email"
        register = {register}
        error={errors.email}
        validation= {{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email Address is required' }}
        />

        <InputField
        name="password"
        label="Password"
        placeholder="Enter your Password"
        type="password"
        register = {register}
        error={errors.password}
        validation= {{ required: 'Password is required', minLength: 8 }}
        />

        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
            {isSubmitting ? 'Signing You In' : 'Sign In'}
        </Button>

        <FooterLink text="Don't have an account ?" linkText="Sign Up" href="/sign-up" />
    </form>
    </>
  )
}

export default SignIn
"use client";
import { authClient } from "@/lib/auth-client";
// import {authclient} from "@/app/lib/auth-client"
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
// import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      toast.error(error.message);
    }
    

    if (res) {
      toast.success("Signin successful");
    }

  };
  const hanndleGoogleSignIn = async() => {
    await authClient.signIn.social ({
      provider : 'google'
    }
    )
  }

  return (
    <div className="container mx-auto min-h-[100vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>

        <p className="mt-4">Dont have an account?{" "}
          <Link href={"/Register"} className="text-blue-500">
            Register
          </Link>
        </p>
        <p className=" text-center">Or</p>
        <button onClick={hanndleGoogleSignIn}type="button" className="w-full border border-slate-300 rounded-lg py-2 flex items-center justify-center gap-2 text-slate-700 hover:bg-slate-100">
          <BsGoogle />
          <span>Sign in with Google</span>
        </button>
      </div>
      
    </div>
  );
};

export default LoginPage;

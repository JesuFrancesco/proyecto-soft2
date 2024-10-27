import React from "react";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage: React.FC = async () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-950 flex flex-col min-h-screen justify-center sm:px-6 lg:px-8">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;

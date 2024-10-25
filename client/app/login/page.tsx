import React from "react";
import LogInForm from "./_components/LogInForm";

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LogInForm />
    </div>
  );
};

export default SignInPage;

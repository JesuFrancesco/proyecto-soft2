import React from "react";
import LogInForm from "./_components/LogInForm";

const SignInPage: React.FC = async () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LogInForm />
    </div>
  );
};

export default SignInPage;

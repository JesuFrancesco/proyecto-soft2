import React from "react";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage: React.FC = async () => {
  return (
    <div className="flex flex-col min-h-screen justify-center sm:px-6 lg:px-8">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;

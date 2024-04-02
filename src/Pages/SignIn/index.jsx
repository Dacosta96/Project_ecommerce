import { useContext, useState, useRef } from "react";
import { ShoppingCardContext } from "../../contex";
import { Link, Navigate } from "react-router-dom";

function SignIn() {
  const context = useContext(ShoppingCardContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignout(false);
    // Redirect
    return <Navigate replace to={"/"} />;
  };
  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);

    handleSignIn();
  };

  const renderLogin = () => {
    return (
      <>
        <div className="flex flex-col mx-4">
          <label className="font-medium text-lg ">Email:</label>
          <span className="bg-black/5 rounded-lg">
            {" "}
            {parsedAccount?.email}{" "}
          </span>
        </div>
        <div className="flex flex-col mx-4 pb-8">
          <label className="font-medium text-lg ">Password:</label>
          <span className="bg-black/5 rounded-lg">
            {parsedAccount?.password}
          </span>
        </div>
        <Link to="/">
          <button
            className="bg-black py-3 w-11/12 text-white rounded-lg mb-4 mx-4 disabled:bg-black/40"
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}
          >
            Log-In
          </button>
        </Link>
        <button
          className=" py-3 w-11/12 text-black rounded-lg mb-4 mx-4 border border-black disabled:bg-black/40 "
          onClick={() => setView("create-user-info")}
          disabled={hasUserAnAccount}
        >
          Sign Up
        </button>
      </>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80 max-md:w-auto">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light
          placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@example.com"
            className="rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="******"
            className="rounded-lg border border-black
          placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogin();

  return (
    <>
      <div className="flex flex-col  border mt-32 w-1/5 max-md:w-auto">
        <h1 className="font-medium text-xl pb-5 text-center">Welcome</h1>

        {renderView()}
      </div>
    </>
  );
}

export default SignIn;

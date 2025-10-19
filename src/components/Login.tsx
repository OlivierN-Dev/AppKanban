import React from "react";

type LoginProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export default function LoginPage({ onSubmit }: LoginProps) {
  return (
    <div className="w-[100%] h-screen items-center justify-center flex flex-col absolute  bg-[#2b2c37] p-6 rounded-md gap-6 z-[999]">
      <h2 className="text-white font-bold text-[18px] text-start">
        Login you're account
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <label
          htmlFor="username"
          className="text-white font-bold flex flex-col gap-2"
        >
          UserName
          <input
            type="text"
            required
            name="username"
            placeholder="Jean Du"
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
          />
        </label>
        <label
          htmlFor="password"
          className="text-white font-bold flex flex-col gap-2"
        >
          PassWord
          <input
            type="password"
            required
            placeholder="azdAdaz@daz10"
            name="password"
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
          />
        </label>
        <label
          htmlFor="filePfp"
          className="text-white font-bold flex flex-col gap-2"
        >
          Profil Picture
          <input
            required
            type="file"
            name="filePfp"
            className="border border-[#828FA340] rounded text-white text-[13px] w-full py-2 px-4"
          />
        </label>
        <button
          type="submit"
          className="font-bold w-full rounded-full py-2 px-4 bg-[#635FC7] text-white"
        >
          Connexion
        </button>
      </form>
    </div>
  );
}

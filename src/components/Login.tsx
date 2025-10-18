import React from "react";

type login = {
  name: string;
  pfp: string;
  action: string;
  mdp: string;
};

export default function LoginPage(
  name: string,
  pfp: string,
  action: string,
  mdp: string
) {
  return (
    <>
      <div>
        <form action={action}>
          <h2>Login you're account</h2>
          <input type="text" placeholder="Andrew Peter" required />
          <input type="password" placeholder="123" required />
          <button type="submit">Connexion</button>
        </form>
      </div>
    </>
  );
}

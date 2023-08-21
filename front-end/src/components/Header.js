import React from "react";

function Header() {
  return (
    <header className="bg-zinc-700 p-6 flex justify-center">
      <img
      className="w-8"
      src="https://seeklogo.com/images/U/uol-logo-68F369E089-seeklogo.com.png"
      alt="Workflow"
      />

      <h1 className="text-zinc-200 text-2xl font-black tracking-tighter antialiased mx-1">
        UOL
      </h1>
    </header>
  );
}

export default Header;
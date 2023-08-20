import Image from "next/image";
import userIcon from '../../public/userIcon.svg'

const Header = () => {
  return (
    <header className="my-4 mx-2 flex">
      <Image
        src={userIcon}
        width={20}
        height={20}
        className="mr-2 md:w-8"
        layout="fixed"
        objectFit="contain"
        objectPosition="center"
        priority
        alt="userIcon" />
      <h1 className="text-2xl md:text-4xl font-semibold">
        Painel de Clientes
      </h1>
    </header>
  );
};

export default Header;

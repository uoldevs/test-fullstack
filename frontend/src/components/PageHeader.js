import Image from "next/image";
import uol from '../../public/UOL-logo.jpg'

const PageHeader = () => {
  return (
    <header className="flex justify-center bg-black">
      <Image
        src={uol}
        width={80}
        height={80}
        className="mr-2 md:w-auto"
        layout="fixed"
        objectFit="contain"
        objectPosition="center"
        priority
        alt="uol logo" />
    </header>
  );
};

export default PageHeader;

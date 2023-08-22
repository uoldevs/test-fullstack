import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <section className="w-full bg-[#333333] py-8">
        <Link href={'/'}>
          <Image className="mx-auto w-2/12 md:w-[5%]" src={'/logo.webp'} alt="logo" width={1000} height={1000} />
        </Link>
      </section>
      <section className='mx-auto my-8 w-11/12 space-y-5 md:mb-10 md:mt-20 md:w-8/12 md:space-y-10'>
        <section className='flex items-center justify-start gap-5 '>
          <Image className="w-[2rem] md:w-[3rem]" src={'/user.svg'} alt="logo" width={1000} height={1000} />
          <h1 className='text-xl font-semibold md:text-3xl'>Painel de Clientes</h1>
        </section>
        <hr />
      </section>
    </header>
  );
}

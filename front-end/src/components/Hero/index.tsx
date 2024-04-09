import { CustomButton } from '../CustomButton';
import hero from '@/assets/hero.png';
import heroBg from '@/assets/hero-bg.png';

export const Hero = () => {
  return (
    <section className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] items-center mx-auto">
      <div className="flex-1 pt-28">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Confira nossas ofertas! Compre com garantia, consciência e qualidade!
        </h1>

        <p className="text-[26px] text-black-100 font-light mt-5">
          Simplifique sua experiência de compra e venda de carros com nosso
          processo sem esforço.
        </p>

        <CustomButton
          title="Explorar veículos"
          containerStyles="bg-blue-700 text-white rounded-full mt-10 hover:bg-blue-600"
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%]  h-[772px] z-0">
          <img src={hero} alt="Carro" className="object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
          <img src={heroBg} alt="Carro" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

import { SVGTruck } from '@/shared/icons/SVGTruck';
import { SVGCoins } from '@/shared/icons/SVGCoins';
import { SVGCredit } from '@/shared/icons/SVGCredit';
import { Button } from '../ui/button';
import { Banner } from '../Banner';
import bg from './assets/bg.png';

export const Header = () => {
  return (
    <header>
      <Banner img={bg} />
      <div className="absolute top-12 left-0 w-full">
        <div className="flex justify-between items-center py-8 px-4">
          <p className="text-white text-sm font-medium">Autaliza</p>
        </div>
        <div className="px-4 pb-7">
          <p className="text-white text-base pb-1">
            Confira nossas <span className="text-myColors-green">OFERTAS</span>
          </p>
          <h1 className="text-white font-bold text-xl pb-4">
            COMPRE COM <span className="text-myColors-green">GARANTIA</span>,
            <br />
            <span className="text-myColors-green">CONSCIÊNCIA</span> E<br />
            <span className="text-myColors-green">QUALIDADE</span>
          </h1>
          <Button className="bg-zinc-600 hover:bg-zinc-500 ">
            Ver catálogo
          </Button>
        </div>
        <div className="text-white flex flex-col text-sm justify-between px-4 gap-6">
          <div className="flex items-center">
            <SVGTruck />
            <span className="w-4 h-[1px] bg-myColors-green rotate-90"></span>
            <span>Entregas</span>
          </div>
          <div className="flex items-center">
            <SVGCoins />
            <span className="w-4 h-[1px] bg-myColors-green rotate-90"></span>
            <span>Melhores taxas</span>
          </div>
          <div className="flex items-center">
            <SVGCredit />
            <span className="w-4 h-[1px] bg-myColors-green rotate-90"></span>
            <span>cartão de crédito em até 12x</span>
          </div>
        </div>
      </div>
    </header>
  );
};

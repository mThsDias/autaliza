interface ImgProps {
  img: string;
}

export const Banner = ({ img }: ImgProps) => {
  return (
    <div>
      <img src={img} alt="Banner" className="object-cover  w-full h-[420px]" />
    </div>
  );
};

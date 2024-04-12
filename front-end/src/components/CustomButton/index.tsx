import { Button } from '../ui/button';

interface CustomButtonProps {
  btnType?: 'button' | 'submit';
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  variant?:
    | 'secondary'
    | 'link'
    | 'destructive'
    | 'ghost'
    | 'default'
    | 'outline'
    | null
    | undefined;
}

export const CustomButton = ({
  btnType,
  handleClick,
  title,
  rightIcon,
  textStyles,
  containerStyles,
  variant,
}: CustomButtonProps) => {
  return (
    <div>
      <Button
        className={`${containerStyles}`}
        type={btnType || 'button'}
        onClick={handleClick}
        variant={variant}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        <div className="ml-2">
          {rightIcon && <img src={rightIcon} width={20} alt="right icon" />}
        </div>
      </Button>
    </div>
  );
};

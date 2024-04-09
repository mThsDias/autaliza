import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { AuthHeader } from './AuthHeader';
import { BackButton } from './BackButton';

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}
export const CardWrapper = ({
  children,
  title,
  label,
  backButtonHref,
  backButtonLabel,
}: CardWrapperProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <AuthHeader title={title} label={label} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

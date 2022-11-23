import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded-100vw font-medium focus:outline-none',
  {
    variants: {
      intent: {
        primary: 'bg-black border-black text-white',
        secondary: 'bg-white border-black text-black',
        danger: 'bg-red-500 text-white focus:ring-red-500',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

interface Props extends VariantProps<typeof buttonStyles> {
  children: string;
  onClick?: () => void;
}

export const Button = ({ intent, fullWidth, children }: Props) => {
  return (
    <button className={buttonStyles({ intent, fullWidth })}>{children}</button>
  );
};

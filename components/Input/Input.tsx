import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  endAdornment?: ReactElement | null;
  startAdornment?: ReactElement | null;
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, endAdornment, startAdornment, ...props }: Props, ref) => {
    const defaultClasses =
      'rounded border-[1px] border-grayscale-lightGray p-2';
    const focusClasses = 'focus:outline-primary-lightgreen'
    const inputClasses = twMerge(className, defaultClasses, focusClasses);

    return (
      <div className="relative">
        {startAdornment && <div>{startAdornment}</div>}
        <input {...props} className={inputClasses} ref={ref} />
        {endAdornment && (
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            {endAdornment}
          </div>
        )}
      </div>
    );
  }
);
export default Input;

// TextField component
import { InputHTMLAttributes, forwardRef } from "react"

type TextFieldProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className"
> & {
    label: string
    error?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    function Comp({ label, error, ...inputParams }, ref
    ) {
        return (
            <div className="textfield-input-wrapper">
                <label className="textfield-input">
                    <span className="textfield-input__label">{label}</span>
                    <input
                        ref={ref}
                        {...inputParams}
                        className="textfield-input__input"
                    />
                </label>
                <span className="textfield-input__error">
                    {error}
                </span>
            </div>
        )
    }
)

export default TextField
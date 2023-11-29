// SwitchField component
import { InputHTMLAttributes, forwardRef } from "react"

type SwitchFieldProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className"
> & {
    label: string
    error?: string
}

const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(
    function Comp({ label, error, ...inputParams }, ref
    ) {
        return (
            <div className="switchfield-input-wrapper">
                <label className={`switchfield-input ${inputParams.type === "checkbox" ? 'checkbox' : ''}`}>
                    <input
                        ref={ref}
                        {...inputParams}
                        className="switchfield-input__input"
                    />
                    <span className="switchfield-input__label">{label}</span>
                </label>
                <span className="switchfield-input__error">
                    {error}
                </span>
            </div>
        )
    }
)

export default SwitchField
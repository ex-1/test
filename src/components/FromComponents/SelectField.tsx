import { FieldValues, UseControllerProps, useController } from "react-hook-form"

export default function SelectField<T extends FieldValues>(
    props: UseControllerProps<T> & {
        label: string
        options: { value: string, label: string }[],
        error?: string,
        extraClasses?: string,
        placeholder?: string
    }
) {

    const {
        label,
        options,
        error,
        extraClasses,
        placeholder,
        ...controllerProps
    } = props

    const { field: { onChange, name, onBlur } } = useController(controllerProps)

    return (
        <div className={`selectfield-input-wrapper ${extraClasses || ''}`}>
            <label className="selectfield-input">
                <span className='selectfield-input__label'>{label}</span>
                <select className='selectfield-input__input'
                    name={name} onChange={onChange} onBlur={onBlur} required
                >
                    <option value='' selected disabled>{placeholder || ''}</option>
                    {options.map(
                        (option, index) => (
                            <option key={`option-${index}`} value={option.value}>
                                {option.label}
                            </option>
                        )
                    )}
                </select>
                <div className="expand-btn"></div>
            </label>
            <span className="selectfield-input__error">
                {error}
            </span>
        </div>
    )
}
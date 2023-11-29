// SelectField component
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import Select from 'react-select'

export default function SelectField<T extends FieldValues>(
    props: UseControllerProps<T> & {
        options: { value: string, label: string }[],
        error?: string,
        extraClasses?: string
    }
) {

    const { options, error, extraClasses, ...controllerProps } = props
    const {
        field: { onChange, name }
    } = useController(controllerProps)

    return (
        <div className={`selectfield-input-wrapper ${extraClasses || ''}`}>
            <Select className='selectfiel-input__input'
                name={name}

                onChange={(newValue) => onChange(newValue?.value)}
                options={options}
            />
            <span className="selectfield-input__error">
                {error}
            </span>
        </div>
    )
}
// FieldContent component
type FieldType = "radio" | "text" | "number" | "checkbox" | "select"
type InputProps = {
    onChange: () => void
    onBlur?: () => void
    value: any
    name: string
}

interface SelectOptions {
    value: string
    content: string
}

interface FormFieldProps {
    fieldType: FieldType
    inputProps: InputProps
    children?: React.ReactNode
    label?: string
    placeholder?: string
    selectOptions?: SelectOptions[]
    extraClasses?: string
}

export default function FormField(
    {
        fieldType, // Тип возвращаемого инпута, обернутого в field 
        children, // Дополнительные элементы в field (по типу error info и т.д.)
        inputProps,
        selectOptions,
        label = "Label", // Заголовок для инпутов
        placeholder = "Placeholder", // Если указать для radio или checkbox ничего не добавиться
        extraClasses
    }: FormFieldProps
) {

    const formField: JSX.Element =

        // Возвращаем input[type=radio] если fieldType = 'radio'
        fieldType === "radio" ? (
            <label className={`form-field radio ${extraClasses}`}>
                <div>
                    <input type='radio' className='form-field__radio'
                        onChange={inputProps.onChange}
                        value={inputProps.value}
                        name={inputProps.name}
                    />
                    <span className='form-field__label'>{label}</span>
                </div>
                {children}
            </label>

            // Возвращаем input[type=text] если fieldType = 'text'
        ) : fieldType === "text" ? (
            <label className={`form-field ${extraClasses}`}>
                <span className='form-field__label'>{label}</span>
                <input type='text' placeholder={placeholder} className='form-field__input'
                    onChange={inputProps.onChange}
                    value={inputProps.value || ''}
                    name={inputProps.name}
                />
                {children}
            </label>

            // Возвращаем input[type=number] если fieldType = 'number'
        ) : fieldType === "number" ? (
            <label className={`form-field ${extraClasses}`}>
                <span className='form-field__label'>{label}</span>
                <input type='number' placeholder={placeholder} className='form-field__input'
                    onChange={inputProps.onChange}
                    value={inputProps.value || ''}
                    name={inputProps.name}
                />
                {children}
            </label>

            // Возвращаем input[type=checkbox] если fieldType = 'checkbox'
        ) : fieldType === "checkbox" ? (
            <label className={`form-field checkbox ${extraClasses}`}>
                <input type='checkbox' className='form-field__checkbox'
                    onChange={inputProps.onChange}
                    value={inputProps.value || false}
                    name={inputProps.name}
                />
                <span className='form-field__label'>{label}</span>
            </label>

            // Возвращаем select если fieldType = 'select'
            // Нужно так же передать options в качестве массива
        ) : fieldType === "select" ? (
            <label className={`form-field select ${extraClasses}`}>
                <span className='form-field__label'>{label}</span>
                <select className='form-field__select'
                    name={inputProps.name} onChange={inputProps.onChange}
                    onBlur={inputProps.onBlur}
                    required
                >
                    <option value='' selected disabled>{placeholder}</option>
                    {selectOptions?.map(
                        (option, index) => (
                            <option key={`option-${index}`} value={option.value}>
                                {option.content}
                            </option>
                        )
                    )}
                </select>
                <div className="expand-btn"></div>
                {children}
            </label>

        ) : <span style={{ color: "red" }}>Указан неверный тип для FormField - {fieldType}</span>

    return formField
}
// FieldContent component

type FieldType = "radio" | "text" | "number" | "checkbox" | "dropdown"

interface FormFieldProps {
    fieldType: FieldType
    inputProps?: object
    children?: React.ReactNode
    title?: string
    placeholder?: string
}

export default function FormField(
    {
        fieldType, // Тип возвращаемого инпута, обернутого в field 
        children, // Дополнительные элементы в field (по типу error info и т.д.)
        inputProps, // пропсы передаваемые из Controller включая базовую валидацию
        title = "Title", // Заголовок для инпутов
        placeholder = "Placeholder" // Если указать для radio или checkbox ничего не добавиться
    }: FormFieldProps
) {

    const formField: JSX.Element | null =

        // Возвращаем input[type=radio] если fieldType = 'radio'
        fieldType === "radio" ? (
            <label className="form-field radio">
                <input type='radio' className='form-field__radio' {...inputProps} />
                <span className='form-field__title'>{title}</span>
                {children}
            </label>

            // Возвращаем input[type=text] если fieldType = 'text'
        ) : fieldType === "text" ? (
            <label className="form-field">
                <span className='form-field__title'>{title}</span>
                <input type='text' placeholder={placeholder}
                    className='form-field__input' {...inputProps}
                />
                {children}
            </label>

            // Возвращаем input[type=number] если fieldType = 'number'
        ) : fieldType === "number" ? (
            <label className="form-field">
                <span className='form-field__title'>{title}</span>
                <input type='number' placeholder={placeholder}
                    className='form-field__input' {...inputProps}
                />
                {children}
            </label>

            // Возвращаем input[type=checkbox] если fieldType = 'checkbox'
        ) : fieldType === "checkbox" ? (
            <label className="form-field checkbox">
                <input type="checkbox" className="form-field__checkbox" {...inputProps} />
                <span className='form-field__title'>{title}</span>
            </label>

            // Здесь будет dropdown
        ) : fieldType === "dropdown" ? (
            <label className="form-field dropdown">

            </label>

        ) : null // Возвращаем null если тип не соотвествует ни одному предложенному

    return formField
}
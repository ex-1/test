// FormSection component

interface FormSectionProps {
    sectionTitle?: string
    children?: React.ReactNode
}

export default function FormSection(
    { sectionTitle = "Section Title", children }: FormSectionProps
) {
    return (
        <div className="form-section">
            <div className="form-section__title-wrapper">
                <span className="form-section__title">{sectionTitle}</span>
            </div>
            <div className="form-section__content">
                {children}
            </div>
        </div>
    )
}
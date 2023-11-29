// FromNextStep component
import './FromNextStep.scss'

export default function FromNextStep(
    { title }: { title: string }
) {
    return (
        <section className='form-next-step-block block'>
            <span className="form-next-step__title">
                {title}
            </span>
        </section>
    )
}
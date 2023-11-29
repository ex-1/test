// SupportBlock component
import './SupportBlock.scss'

export default function SupportBlock() {
    return (
        <section className="support-block block">
            <div className="wrapper support-block__title-wrapper">
                <span className="support-block__title">
                    Есть вопросы? Обратитесь в поддержку
                </span>
            </div>
            <div className="wrapper support-block__content-wrapper">
                <span className="support-block__content">
                    Свяжемся с Вами в течении 30 минут. Работаем с 9:00 до 21:00
                </span>
            </div>
            <button className="btn appeal-btn">
                <span>Обратиться</span>
            </button>
        </section>
    )
}
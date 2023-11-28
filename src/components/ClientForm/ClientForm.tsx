// Form component
'use client'
import './ClientForm.scss'
import FormField from '@/components/FromComponents/FormField'
import { useForm, Controller } from 'react-hook-form'
import FormSection from '../FromComponents/FormSection'

export default function ClientForm() {

    const { handleSubmit, control } = useForm()

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <section className="client-form-section section">
            <div className="wrapper form-wrapper">
                <form onSubmit={() => onSubmit} className="form">
                    <FormSection sectionTitle='Юридические данные'>
                        <span className="form-field__caption">Подключаюсь как</span>

                        <Controller
                            control={control}
                            name='radio1'
                            defaultValue='1'
                            render={
                                ({ field }) => <FormField fieldType='radio' inputProps={field}
                                    title='ИП или организация' />
                            }
                        />

                        <Controller
                            control={control}
                            name='radio1'
                            defaultValue='2'
                            render={
                                ({ field }) => <FormField fieldType='radio' inputProps={field}
                                    title='Самозанятый' />
                            }
                        />
                    </FormSection>

                    <FormSection sectionTitle='Данные организации'>
                        <FormField fieldType='text' title='ИНН или Название компании'
                            placeholder='Поиск по ИНН или названию'
                        />
                        {/* Тип организации (выпадаюший список) */}
                        <FormField fieldType='text' title='Название (как в реестре)'
                            placeholder='Название'
                        />

                        <FormField fieldType='text' title='ИНН'
                            placeholder='ИНН'
                        />
                        <FormField fieldType='text' title='КПП'
                            placeholder='КПП'
                        />
                        <FormField fieldType='text' title='ОГРН / ОГРНИП'
                            placeholder='ОГРН / ОГРНИП'
                        />
                        <FormField fieldType='text' title='Адрес регистрации (как в реестре)'
                            placeholder='Адрес регистрации'
                        />
                        <FormField fieldType='checkbox' title='Совпадает фактически' />

                        {/* Два выпадающих списка  */}
                    </FormSection>
                    <button className="btn continue-btn" type='submit'>
                        <span>Продолжить</span>
                    </button>
                </form>
            </div>
        </section>
    )
}
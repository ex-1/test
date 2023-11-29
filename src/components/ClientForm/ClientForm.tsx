// Form component
'use client'
import './ClientForm.scss'
import FormField from '@/components/FromComponents/FormField'
import FormSection from '@/components/FromComponents/FormSection'

import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { IClientForm } from '@/types/clientForm.types'
import { companyTypes, ndsRates, taxRegimes } from '@/data/companyData'

export default function ClientForm() {

    const { handleSubmit, reset, control, formState: { errors } } = useForm<IClientForm>({
        mode: 'onChange'
    })

    const submit: SubmitHandler<IClientForm> = data => {
        console.log(data)
        reset()
    }

    const error: SubmitErrorHandler<IClientForm> = data => {
        console.log(data)
    }

    return (
        <section className="client-form-block block">
            <div className="wrapper form-wrapper">
                <form onSubmit={handleSubmit(submit, error)} className="form">
                    <FormSection sectionTitle='Юридические данные'>

                        <span className="form-field__caption">Подключаюсь как</span>
                        <Controller control={control} name='legalData'
                            render={({ field: { onChange, name } }) =>
                                <FormField fieldType='radio' label='ИП или организация'
                                    inputProps={{ onChange, value: 'ip', name }} />}
                        />

                        <Controller control={control} name='legalData'
                            render={({ field: { onChange, name } }) =>
                                <FormField fieldType='radio' label='Самозанятый'
                                    inputProps={{ onChange, value: 'selfEmployed', name }} />}
                        />

                    </FormSection>

                    <FormSection sectionTitle='Данные организации'>

                        <Controller control={control} name="companySearch"
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='text' label='ИНН или Название компании'
                                    placeholder='Поиск по ИНН или названию'
                                    inputProps={{ onChange, value, name }} />}
                        />

                        <Controller control={control} name="companyType"
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='select' label='Тип организации'
                                    placeholder='Тип организации'
                                    inputProps={{ onChange, value, name }}
                                    selectOptions={companyTypes} />}
                        />

                        <Controller control={control} name="companyRegiditName"
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='text' label='Название (как в реестре)'
                                    placeholder='Название'
                                    inputProps={{ onChange, value, name }} />}
                        />

                        <Controller control={control} name="inn"
                            rules={{
                                minLength: 10,
                                maxLength: 12
                            }}
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='number' label='ИНН'
                                    placeholder='ИНН'
                                    inputProps={{ onChange, value, name }}
                                >

                                    {errors.inn &&
                                        <span className='form-field__remark'>
                                            *ИНН должен состоять из числа от 10 до 12 цифр
                                        </span>
                                    }
                                </FormField>
                            }
                        />

                        <Controller control={control} name="kpp"
                            rules={{
                                minLength: 9,
                                maxLength: 10
                            }}
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='number' label='КПП'
                                    placeholder='КПП'
                                    inputProps={{ onChange, value, name }}
                                >
                                    {errors.kpp &&
                                        <span className='form-field__remark'>
                                            *КПП должен состоять из числа от 9 до 10 цифр
                                        </span>
                                    }
                                </FormField>}
                        />

                        <Controller control={control} name="ogrn"
                            rules={{
                                minLength: 13,
                                maxLength: 15
                            }}
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='number' label='ОГРН / ОГРНИП'
                                    placeholder='ОГРН / ОГРНИП'
                                    inputProps={{ onChange, value, name }}>
                                    {errors.ogrn &&
                                        <span className='form-field__remark'>
                                            *ОГРН / ОГРНИП должен состоять из числа от 13 до 15 цифр
                                        </span>
                                    }
                                </FormField>}
                        />

                        <Controller control={control} name="regeditAddress"
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='text' label='Адрес регистрации (как в реестре)'
                                    placeholder='Адрес регистрации'
                                    inputProps={{ onChange, value, name }} />}
                        />

                        <Controller control={control} name="isMatches"
                            render={({ field: { onChange, value, name } }) =>
                                <FormField fieldType='checkbox' label='Совпадает фактически'
                                    inputProps={{ onChange, value, name }} />}
                        />

                        <div className="client-form__separator">
                            <Controller control={control} name="taxRegime"
                                render={({ field: { onChange, value, name } }) =>
                                    <FormField fieldType='select' label='Налоговый режим'
                                        inputProps={{ onChange, value, name }}
                                        placeholder='Налоговый режим'
                                        selectOptions={taxRegimes} />}
                            />

                            <Controller control={control} name="ndsRate"
                                render={({ field: { onChange, value, name } }) =>
                                    <FormField fieldType='select' label='Ставка НДС'
                                        extraClasses='client-form__nds-select'
                                        inputProps={{ onChange, value, name }}
                                        placeholder='Ставка НДС'
                                        selectOptions={ndsRates} />}
                            />
                        </div>

                    </FormSection>

                    <button className="btn continue-btn" type='submit'>
                        <span>Продолжить</span>
                    </button>

                </form>
            </div>
        </section >
    )
}
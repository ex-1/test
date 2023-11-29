// Form component
'use client'
import './ClientForm.scss'
import TextField from '@/components/FromComponents/TextField'
import SelectField from '../FromComponents/SelectField'
import SwitchField from '../FromComponents/SwitchField'
import FormSection from '@/components/FromComponents/FormSection'

import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { companyTypes, ndsRates, taxRegimes } from '@/data/companyData'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'


export default function ClientForm() {
    const clientValuesSchema = z.object({
        legalData: z.string(),
        companySearch: z.string(),
        companyType: z.string(),
        companyRegiditName: z.string(),
        inn: z.string()
            .min(10, "*ИНН должен содержать минимум 10 цифр")
            .max(12, "*ИНН должен содержать максимум 12 цифр"),
        kpp: z.string()
            .min(9, "*КПП должен содержать минимум 9 цифр")
            .max(10, "*КПП должен содержать максимум 10 цифр"),
        ogrn: z.string()
            .min(12, "*ОГРН / ОГРНИП должен содержать минимум 12 цифр")
            .max(15, "*ОГРН / ОГРНИП должен содержать максимум 15 цифр"),
        regeditAddress: z.string(),
        isMatches: z.boolean(),
        taxRegime: z.string(),
        ndsRate: z.string()
    })

    type IClientForm = z.infer<typeof clientValuesSchema>

    const {
        handleSubmit,
        register,
        reset,
        control,
        formState: { errors, isSubmitting }
    } = useForm<IClientForm>({
        resolver: zodResolver(clientValuesSchema),
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
                        <SwitchField
                            {...register('legalData')}
                            value='ip'
                            type='radio'
                            label='ИП или организация'
                        />

                        <SwitchField
                            {...register('legalData')}
                            value='selfEmployed'
                            type='radio'
                            label='Самозанятый'
                        />

                    </FormSection>

                    <FormSection sectionTitle='Данные организации'>

                        <TextField
                            {...register('companySearch')}
                            label='ИНН или Название компании'
                            placeholder='Поиск по ИНН или названию'
                            error={errors.companySearch?.message}
                        />

                        <SelectField
                            control={control}
                            label='Тип огранизации'
                            placeholder='Тип организации'
                            name='companyType'
                            options={companyTypes}
                        />

                        <TextField
                            {...register('companyRegiditName')}
                            label='Название (как в реестре)'
                            placeholder='Название'
                            error={errors.companyRegiditName?.message}
                        />

                        <TextField
                            {...register('inn')}
                            type='number'
                            label='ИНН'
                            placeholder='ИНН'
                            error={errors.inn?.message}
                        />

                        <TextField
                            {...register('kpp')}
                            type='number'
                            label='КПП'
                            placeholder='КПП'
                            error={errors.kpp?.message}
                        />

                        <TextField
                            {...register('ogrn')}
                            type='number'
                            label='ОГРН / ОГРНИП'
                            placeholder='ОГРН / ОГРНИП'
                            error={errors.ogrn?.message}
                        />

                        <TextField
                            {...register('regeditAddress')}
                            label='Адрес регистрации (как в реестре)'
                            placeholder='Адрес регистрации'
                            error={errors.regeditAddress?.message}
                        />

                        <SwitchField
                            {...register('isMatches')}
                            type='checkbox'
                            label='Совпадает фактически'
                        />

                        <div className="client-form__separator">
                            <SelectField
                                control={control}
                                name="taxRegime"
                                label='Налоговый режим'
                                placeholder='Налоговый режим'
                                options={taxRegimes}
                                error={errors.taxRegime?.message}
                            />

                            <SelectField
                                extraClasses="client-form__nds-select"
                                control={control}
                                label='Ставка НДС'
                                placeholder='Ставка НДС'
                                name="ndsRate"
                                options={ndsRates}
                                error={errors.taxRegime?.message}
                            />

                        </div>
                    </FormSection>

                    <button
                        className="btn continue-btn"
                        type='submit'
                        disabled={isSubmitting}
                    >
                        <span>Продолжить</span>
                    </button>

                </form>
            </div>
        </section >
    )
}
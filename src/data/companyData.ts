import { ISelectOption } from "@/types/clientForm.types"

export const companyTypes: ISelectOption[] = [
    { value: 'ip', label: 'Индивидуальный предприниматель' },
    { value: 'ooo', label: 'Общество с ограниченной ответственностью' },
    { value: 'ao', label: 'Акционерное общество' },
    { value: 'hc', label: 'Холдинговая компания' },
    { value: 'kt', label: 'Командитное товарищество ' }
]

export const taxRegimes: ISelectOption[] = [
    { value: 'och', label: 'Общий (OCH)' },
    { value: 'usn', label: 'Упрощенный (УСН)' },
    { value: 'npd', label: 'Профессиональный доход (НПД)' },
]

export const ndsRates: ISelectOption[] = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
    { value: '25', label: '25%' }
]
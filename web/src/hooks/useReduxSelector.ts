import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/store/index'

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

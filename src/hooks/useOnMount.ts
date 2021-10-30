import { useEffect, EffectCallback } from 'react'

export const useOnMount = (effect: EffectCallback) => {
  // disabled since the point of this hook is to only run the first time
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

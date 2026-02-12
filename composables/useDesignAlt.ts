export function useDesignAlt() {
  const darkVariant = useState<boolean>('design-alt', () => false)

  function toggle() {
    darkVariant.value = !darkVariant.value
  }

  return { darkVariant, toggle }
}

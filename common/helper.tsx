import { StyledLink } from '@styles/index'

export const replaceWithLink = (
  text: string,
  anchor?: {
    label?: string
    link?: string
  }[]
) => {
  if (anchor) {
    const textArray = text.split('<a>')
    return textArray.map((str, index) => {
      return (
        <>
          {str}
          {index !== textArray.length - 1 && (
            <StyledLink href={anchor[index].link}>
              {anchor[index].label}
            </StyledLink>
          )}
        </>
      )
    })
  }
  return text
}

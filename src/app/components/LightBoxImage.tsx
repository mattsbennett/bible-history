import Image from 'next/image'
import {
  ContainerRect,
  isImageFitCover,
  isImageSlide,
  Slide,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox'

function isNextJsImage(slide: Slide) {
  return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}

export default function LightboxImage({
  slide,
  offset,
  rect,
}: {
  slide: Slide
  offset: number
  rect: ContainerRect
}) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  if (!isNextJsImage(slide)) return undefined

  const slideHeight = slide.height ?? 1
  const slideWidth = slide.width ?? 1
  const width = !cover
    ? Math.round(Math.min(rect.width, (rect.height / slideHeight) * slideWidth))
    : rect.width

  const height = !cover
    ? Math.round(Math.min(rect.height, (rect.width / slideWidth) * slideHeight))
    : rect.height

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder="blur"
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  )
}

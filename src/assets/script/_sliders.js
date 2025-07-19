import Splide, { LOOP } from "@splidejs/splide"
import { breakpoints, makeSplide } from "./_helpers"

export default function () {
  Splide.defaults = {
    arrows: false,
    pagination: false,
    perMove: 1,
    gap: 24,
    omitEnd: true,
    keyboard: "focused",
    breakpoints: {
      [breakpoints.mobile]: {
        gap: 16
      }
    }
  }

  makeSplide(".banners", {
    type: LOOP,
    pagination: true,
    autoWidth: true,
    autoHeight: true,
    autoplay: "pause",
    intersection: {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    },
  })

  makeSplide(".collections-special__slider, .cards-slider__slider", {
    perPage: 3,
    arrows: true,
    breakpoints: {
      [breakpoints.laptop]: {
        perPage: 2,
      },
      [breakpoints.mobile]: {
        perPage: 1,
      }
    }
  })

  makeSplide(".documents-slider", {
    arrows: true,
    autoWidth: true,
    perMove: 2
  })
}
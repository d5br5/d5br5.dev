const size = {
  mobile: "400px",
  tabletS: "500px",
  tabletM: "700px"
}

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletS}) and (max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletM})`,
  desktop: `(min-width: ${size.tabletM})`
}

export default theme;
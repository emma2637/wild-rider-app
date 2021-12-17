const  LayoutQuery = (language) => {
    return (`query {
        homepages(locale: "${language}") {
          headers{
            menuoptions{
              displayname
              menuoptionchilds{
                displayname
                path
              }
            }
            languages {
              displayname
              code
            }
            logopath {
              url
              width
              height
              alternativeText
            }
          }
          footers{
            text
          }
          buttons{
            type
            text
          }
        }    
      }
`);
}

export default LayoutQuery;
 const HomepageQuery = (language) => {
    return (`query {
        homepages(locale: "${language}") {
          carssliders{
            carsliderinfos{
              title
              description
              imagepath{
                url
                width
                height
                alternativeText
              }
              hastripadvisor
              carratings {
                rate
                profileimagepath {
                  url
                  width
                  height
                  alternativeText
                }
                comment
                name
              }
            }
            tripadvisors{
              tripadvisorlogopath {
                url
                width
                height
                alternativeText
              }
              content
              url
            }
          }
          ourservices {
          title
            services{
              imagepath{
                url
                width
                height
                alternativeText
              }
              title
              description
            }
          }      
          thustworthycarrentals{
            title
            Shorttitle
            thrustworthycarrentalinfos{
              imagepath{
                url
                width
                height
                alternativeText
              }
              title
              shortdescription
              longdescription
            }
          }
          clientsliders{
            title
            clientopinions{
              profileimagepath {
                url
                width
                height
                alternativeText
              }
              comment
              name
              rate
            }      
          }
          faqs{
            title
            description
            faqoptions{
              title
              description
            }
          }
          otexperts{
            title
            teamimagepath{
              url
              width
              height
              alternativeText
            }
            otexpertsinfos{
              imagepath {
                url
                width
                height
                alternativeText
              }
              description
            }
          }
          buttons{
            type
            text
          }
        }    
      }
`)
}

export default HomepageQuery;